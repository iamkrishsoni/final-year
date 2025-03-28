import * as FileSystem from "expo-file-system";

export const generateImage = async (answers) => {
    const apiUrl = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"; // Replace with actual API URL
    const authToken = "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"; // Replace with your token

    // Extract values from answers
    const plotSize = answers.find(a => a.question === "What is the size of the plot?")?.answer || "Medium";
    const homeType = answers.find(a => a.question === "Which architectural style do you prefer?")?.answer || "Modern";
    const floors = answers.find(a => a.question === "How many floors do you want?")?.answer || "Two Stories";
    const rooms = answers.find(a => a.question === "What key rooms are required?")?.answer || "Living Room, Kitchen";
    const outdoorSpace = answers.find(a => a.question === "Do you need outdoor spaces?")?.answer || "No";
    const parking = answers.find(a => a.question === "Do you require parking space?")?.answer || "No";
    const luxuryFeatures = answers.find(a => a.question === "What luxury features would you like to include?")?.answer || "None";
    const materials = answers.find(a => a.question === "Do you have preferences for construction materials?")?.answer || "Standard";
    const sustainability = answers.find(a => a.question === "Should the design include sustainability features?")?.answer || "No";
    const lighting = answers.find(a => a.question === "What kind of lighting do you prefer?")?.answer || "Standard";
    const ventilation = answers.find(a => a.question === "What kind of ventilation do you prefer?")?.answer || "Standard";

    // Define approximate dimensions based on plot size
    let length = 80, width = 60;  // Default values
    if (plotSize === "Large (5000-10,000 sq ft)") {
        length = 100;
        width = 80;
    }

    // Construct the prompt dynamically
    const prompt = `A ${floors} Mediterranean-style house design with a width of ${width}ft and length of ${length}ft. 
    It includes a ${rooms}, an outdoor ${outdoorSpace}, and ${parking} parking it should be ${homeType}. 
    Features: ${luxuryFeatures}, built with ${materials}, incorporating ${sustainability} features. 
    Lighting: ${lighting}, Ventilation: ${ventilation}. 
    Top view architectural layout with realistic details.`;

    console.log("prompt", prompt);


    // Request body
    const requestBody = { inputs: prompt };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify(requestBody),
        });

        // Handle response
        if (response.status === 200) {
            const contentType = response.headers.get("Content-Type");
            console.log("content type", contentType);

            const imageBlob = await response.blob();
            const fileUri = `${FileSystem.cacheDirectory}generated-image.jpg`;

            // Convert blob to a local file
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            return new Promise((resolve, reject) => {
                reader.onloadend = async () => {
                    try {
                        const base64 = reader.result.split(",")[1]; // Remove the data type prefix
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

            return { success: true, imageUrl: `data:image/jpeg;base64,${fileUri}` };
        } else if (response.status === 400) {
            return { success: false, error: "Bad Request: Invalid input" };
        } else if (response.status === 401) {
            return { success: false, error: "Unauthorized: Invalid Token" };
        } else if (response.status === 500) {
            return { success: false, error: "Server Error" };
        } else {
            return { success: false, error: `Unexpected Error: ${response.status}` };
        }
    } catch (error) {
        console.log("error in getting image", error);

        return { success: false, error: "Network Error: Failed to connect" };
    }
};
