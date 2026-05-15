export type RiskLevel = "Kritik" | "Yüksek" | "Orta" | "Düşük";

export interface AnalysisResult {
  riskSeviyesi: RiskLevel;
  hukukAlani: string;
  madde: string;
  sorun: string;
  onerilenDuzeltme: string;
  duzeltilmisMadde: string;
}

export const mockAnalysisData: AnalysisResult[] = [
  {
    riskSeviyesi: "Yüksek",
    hukukAlani: "İş Kanunu",
    madde: "Şirket, çalışanı herhangi bir gerekçe göstermeden işten çıkarabilir.",
    sorun: "Bu ifade fesih süreçlerinde çalışan hakları ve bildirim yükümlülükleri açısından risklidir.",
    onerilenDuzeltme: "Fesih hükümleri yürürlükteki İş Kanunu hükümlerine uygun hale getirilmelidir.",
    duzeltilmisMadde: "Taraflar iş sözleşmesini yürürlükteki mevzuata uygun şekilde, kanuni bildirim sürelerine riayet ederek feshedebilir.",
  },
  {
    riskSeviyesi: "Kritik",
    hukukAlani: "KVKK",
    madde: "Şirket, çalışanın kişisel verilerini üçüncü taraflarla izin almadan paylaşabilir.",
    sorun: "Açık rıza veya hukuki dayanak olmadan kişisel veri paylaşımı KVKK açısından risklidir.",
    onerilenDuzeltme: "Veri işleme amacı, açık rıza, saklama süresi ve paylaşım kapsamı net yazılmalıdır.",
    duzeltilmisMadde: "Kişisel veriler, yalnızca KVKK kapsamında belirtilen amaçlarla ve gerekli hukuki şartlar sağlanarak işlenebilir.",
  },
  {
    riskSeviyesi: "Orta",
    hukukAlani: "Türk Borçlar Kanunu",
    madde: "Sözleşmeden doğan uyuşmazlıklarda yalnızca Şirket'in bulunduğu yer mahkemeleri yetkilidir.",
    sorun: "Tüketici işlemleri veya özel yetki kuralları içeren durumlarda bu madde geçersiz sayılabilir.",
    onerilenDuzeltme: "Yetkili mahkeme belirlemesi kanuni istisnalar saklı kalmak kaydıyla yapılmalıdır.",
    duzeltilmisMadde: "İşbu sözleşmeden doğan uyuşmazlıklarda, kanunun emredici hükümleri saklı kalmak kaydıyla, Şirket merkezinin bulunduğu yer mahkemeleri yetkilidir.",
  },
  {
    riskSeviyesi: "Düşük",
    hukukAlani: "Ticaret Hukuku",
    madde: "Taraflar adres değişikliklerini bildirmek zorunda değildir.",
    sorun: "Adres değişikliğinin bildirilmemesi tebligat süreçlerinde gecikmelere yol açabilir.",
    onerilenDuzeltme: "Adres değişikliği bildirimi zorunlu tutulmalıdır.",
    duzeltilmisMadde: "Taraflar, işbu sözleşmede belirtilen adreslerini yasal tebligat adresi olarak kabul ederler. Adres değişiklikleri 7 gün içinde yazılı olarak bildirilmedikçe eski adrese yapılan tebligatlar geçerli sayılır.",
  }
];

export interface ContractSummary {
  totalRisks: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
}

export const getSummary = (data: AnalysisResult[]): ContractSummary => {
  return {
    totalRisks: data.length,
    critical: data.filter(r => r.riskSeviyesi === "Kritik").length,
    high: data.filter(r => r.riskSeviyesi === "Yüksek").length,
    medium: data.filter(r => r.riskSeviyesi === "Orta").length,
    low: data.filter(r => r.riskSeviyesi === "Düşük").length,
  };
};
