import * as FileSystem from "expo-file-system";

export const generateImage = async (prompt) => {
    const apiUrl = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";
    const authToken = "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";

    console.log("Sending Prompt to API:", prompt);

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ inputs: prompt }),
        });

        if (response.ok) {
            const imageBlob = await response.blob();
            const fileUri = `${FileSystem.cacheDirectory}generated-image.jpg`;

            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            return new Promise((resolve, reject) => {
                reader.onloadend = async () => {
                    try {
                        const base64 = reader.result.split(",")[1];
                        await FileSystem.writeAsStringAsync(fileUri, base64, {
                            encoding: FileSystem.EncodingType.Base64,
                        });

                        resolve({ success: true, imageUrl: `data:image/jpeg;base64,${base64}` });
                    } catch (err) {
                        console.error("Error saving image:", err);
                        reject({ success: false, error: "Error saving image" });
                    }
                };
                reader.onerror = () => reject({ success: false, error: "Error reading image blob" });
            });
        } else {
            return { success: false, error: `Unexpected Error: ${response.status}` };
        }
    } catch (error) {
        console.error("Network Error:", error);
        return { success: false, error: "Network Error: Failed to connect" };
    }
};

