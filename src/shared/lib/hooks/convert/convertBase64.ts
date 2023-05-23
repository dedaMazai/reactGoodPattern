export const convertBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
        resolve(
            fileReader.result
                ?.toString()
                ?.replace(/^data:image\/(png|jpg|jpeg);base64,/, '')!,
        );
    };

    fileReader.onerror = (error) => {
        reject(error);
    };
});
