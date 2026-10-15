/**
 * Konfigurasi kontak utama Ngastadalem Studio
 * Ganti nomor di sini jika diperlukan penggantian nomor WhatsApp.
 */
export const WA_NUMBER = "6282221366224";

export function getWhatsAppUrl(message: string = "Halo Ngastadalem, saya ingin berkonsultasi mengenai proyek arsitektur/konstruksi."): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const OFFICIAL_EMAIL = "ngastadalemworkshop@gmail.com";

