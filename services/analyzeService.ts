import { mockAnalysisData, AnalysisResult } from '../data/mockData';

export const analyzeContractPdf = async (file: any): Promise<AnalysisResult[]> => {
  // TODO: OpenAI API entegrasyonu
  /*
  const formData = new FormData();
  formData.append('pdf', {
    uri: file.uri,
    name: file.name,
    type: 'application/pdf',
  } as any);

  try {
    const response = await fetch('YOUR_BACKEND_URL/analyze', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    if (!response.ok) {
      throw new Error('Analiz sırasında bir hata oluştu.');
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
  */

  // Şimdilik demo data döndür
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockAnalysisData);
    }, 3000); // 3 saniye loading simülasyonu
  });
};
