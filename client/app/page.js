'use client';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Nutriwork</span>
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#ozellikler" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors">Özellikler</a>
              <a href="#nasil-calisir" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors">Nasıl Çalışır</a>
              <a href="#hakkimizda" className="text-gray-700 hover:text-green-600 font-medium text-lg transition-colors">Hakkımızda</a>
              <button onClick={() => router.push('/oneriler')} className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 cursor-pointer font-medium text-lg transition-colors shadow-md">
                Başlayın
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Sağlığınıza Uygun <span className="text-green-600">Beslenme</span> Artık Kolay
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Nutriwork, hastalıklarınız ve beslenme kısıtlamalarınıza göre kişiselleştirilmiş öğün önerileri sunar. Yapay zeka destekli platformumuz ile güvenli ve dengeli beslenin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => router.push('/oneriler')} className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 cursor-pointer font-semibold text-lg transition-colors shadow-lg">
                Başlayın
              </button>
              <button className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 font-semibold text-lg transition-colors">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 shadow-xl">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🥗</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Günlük Öneriniz</h3>
                  <p className="text-gray-600">Kişiselleştirilmiş menü</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-medium text-gray-900 text-lg">Kahvaltı: Yulaf lapası + Meyve</p>
                  <p className="text-sm text-gray-600 mt-1">✓ Diyabet dostu ✓ Gluten içermez</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-medium text-gray-900 text-lg">Öğle: Izgara tavuk + Quinoa</p>
                  <p className="text-sm text-gray-600 mt-1">✓ Düşük sodyum ✓ Kalp sağlığı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Conditions Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Desteklenen Sağlık Durumları</h2>
            <p className="text-xl text-gray-600">Nutriwork, çeşitli hastalık ve hassasiyetler için özel menüler oluşturur</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🩺", title: "Diyabet", desc: "Kan şekeri dengesi için optimize edilmiş öğünler" },
              { icon: "❤️", title: "Kalp Sağlığı", desc: "Düşük sodyum ve kolesterol içeren yemekler" },
              { icon: "🫀", title: "Hipertansiyon", desc: "Tansiyon dostu, tuz kontrollü beslenme" },
              { icon: "🌾", title: "Çölyak Hastalığı", desc: "Tamamen gluten içermeyen alternatifler" },
              { icon: "🥛", title: "Laktoz İntoleransı", desc: "Süt ürünü içermeyen lezzetli seçenekler" },
              { icon: "🍽️", title: "Mide Hassasiyeti", desc: "Yumuşak ve sindirim dostu yemekler" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-green-500">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Not Sure Section*/}
        <section className="nutri-bg-section py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white bg-opacity-80 rounded-2xl shadow-xl p-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Hangi Beslenme Kısıtlamaları Size Uygun?</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Beslenme kısıtlamalarınızdan emin değil misiniz? Nutriwork'ün rehberliğinde, sağlığınıza en uygun beslenme planını keşfedin. Uzman önerileri ve yapay zeka destekli analizlerle, kendiniz için en iyi seçenekleri bulun.
            </p>
            <button onClick={() => router.push('/yz-asistan')} className="bg-green-600 text-white px-10 py-4 rounded-lg hover:bg-green-700 font-bold text-xl transition-colors shadow-xl">
              Rehberliği Başlatın
            </button>
          </div>
        </section>

      {/* Features Section */}
      <section id="ozellikler" className="py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Özellikler</h2>
            <p className="text-xl text-gray-600">Nutriwork'ün size sunduğu avantajlar</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🤖", title: "Yapay Zeka Destekli", desc: "Alışkanlıklarınızı öğrenen ve zamanla daha iyi öneriler sunan akıllı sistem" },
              { icon: "🎯", title: "Kişiselleştirilmiş", desc: "Sağlık durumunuza, tercihlerinize ve hedeflerinize özel menüler" },
              { icon: "🛡️", title: "Güvenli Filtreleme", desc: "Hassasiyetlerinize uygun olmayan yiyecekler otomatik olarak elenir" },
              { icon: "👴", title: "Erişilebilir Tasarım", desc: "Yaşlı bireyler ve dyslexia hastaları için optimize edilmiş arayüz" },
              { icon: "📊", title: "Besin Analizi", desc: "Her öğünün detaylı besin değerleri ve alerjen bilgileri" },
              { icon: "🍳", title: "Geniş Tarif Arşivi", desc: "Binlerce sağlıklı ve lezzetli tarif alternatifi" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="nasil-calisir" className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nasıl Çalışır?</h2>
            <p className="text-xl text-gray-600">Üç basit adımda güvenli beslenmeye başlayın</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Profil Oluşturun", desc: "Sağlık durumunuzu, alerjenlerinizi ve beslenme kısıtlamalarınızı belirtin" },
              { step: "2", title: "Öneriler Alın", desc: "Yapay zeka, size özel güvenli ve dengeli öğün önerileri hazırlar" },
              { step: "3", title: "Beslenin ve Takip Edin", desc: "Önerilen tarifleri uygulayın, ilerlemenizi takip edin ve alışkanlıklarınızı geliştirin" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-xl shadow-lg">
                  <div className="text-6xl font-bold mb-4 opacity-50">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-green-50 text-lg leading-relaxed">{item.desc}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <span className="text-4xl text-green-600">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="bg-gradient-to-b from-green-50 to-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Hakkımızda</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Nutriwork, sağlık bilgisi ile gastronomiyi bir araya getirerek güvenilir, erişilebilir ve kullanıcı dostu bir dijital beslenme rehberi sunar. Amacımız, belirli hastalıklara ve beslenme kısıtlamalarına sahip bireylerin, ne yiyebileceklerini kolayca öğrenmelerini sağlamaktır.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Yapay zeka destekli platformumuz, kullanıcı alışkanlıklarını analiz ederek zamanla daha doğru, dengeli ve kişiselleştirilmiş öneriler sunar. Böylece sağlıklı beslenme artık karmaşık değil, keyifli bir deneyim haline gelir.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Sağlığınıza Uygun Beslenmeye Bugün Başlayın</h2>
          <p className="text-xl text-green-50 mb-8">
            Ücretsiz hesap oluşturun ve kişiselleştirilmiş beslenme önerilerinize hemen erişin.
          </p>
          <button onClick={() => router.push('/oneriler')} className="bg-white text-green-600 px-10 py-4 rounded-lg hover:bg-green-50 font-bold text-xl transition-colors shadow-xl">
            Çok Yakında!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="text-2xl font-bold">Nutriwork</span>
              </div>
              <p className="text-gray-400 text-lg">Sağlığınız için dijital beslenme rehberi</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Ürün</h4>
              <ul className="space-y-2 text-gray-400 text-lg">
                <li><a href="#" className="hover:text-white transition-colors">Özellikler</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fiyatlandırma</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifler</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Şirket</h4>
              <ul className="space-y-2 text-gray-400 text-lg">
                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Destek</h4>
              <ul className="space-y-2 text-gray-400 text-lg">
                <li><a href="#" className="hover:text-white transition-colors">Yardım Merkezi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gizlilik</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-lg">
            <p>&copy; 2026 Nutriwork. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
