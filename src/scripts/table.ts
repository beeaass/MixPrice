export interface Item {
    name: string;
    image: string;
    quantity: string;
    cost: string;
    costImage: string;
  }
  
  export interface Section {
    id: string;
    title: string;
    items: Item[];
  }
  
  export const loadSections = async (jsonFilePath: string): Promise<Section[]> => {
    const response = await fetch(new URL(jsonFilePath, import.meta.url).href);
    if (!response.ok) throw new Error(`Ошибка: ${response.statusText}`);
  
    const files: string[] = await response.json();
    return Promise.all(files.map(async (file) => {
      const fileResponse = await fetch(new URL(`/src/components/json/${file}`, import.meta.url).href);
      if (!fileResponse.ok) throw new Error(`Ошибка при загрузке файла ${file}: ${fileResponse.statusText}`);
      return (await fileResponse.json()).section;
    }));
  };
  