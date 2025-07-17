import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Hammer" className="h-8 w-8 text-orange-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">ДемоСнос</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">О нас</a>
              <a href="#works" className="text-gray-700 hover:text-orange-500 transition-colors">Наши работы</a>
              <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Услуги</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Получить расчет
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="from-blue-900 to-blue-800 text-white py-20 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight text-amber-50 text-left">Демонтаж любой сложности с использованием роботизированных машин Brokk</h1>
              <p className="text-xl mb-8 text-blue-100">
                Современные технологии для безопасного и эффективного демонтажа. 
                Работаем с промышленными объектами, жилыми зданиями и сложными конструкциями.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">написать в WA</Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://v3.fal.media/files/tiger/IfWTPuf2lY4-4IQg3wteo_output.png" 
                alt="Роботизированная машина Brokk на строительной площадке"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Работаем круглосуточно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Высокая скорость</h3>
              <p className="text-gray-600">Роботы Brokk работают в 3 раза быстрее традиционных методов</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
              <p className="text-gray-600">Дистанционное управление обеспечивает максимальную безопасность</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Точность</h3>
              <p className="text-gray-600">Прецизионный демонтаж без повреждения соседних конструкций</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">О нас</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы - команда профессионалов с 15-летним опытом в сфере демонтажа. 
                Одними из первых в России начали использовать роботизированные машины Brokk 
                для выполнения сложнейших демонтажных работ.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-3" />
                  <span>Лицензированная деятельность</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-3" />
                  <span>Опыт ведения сложных работ</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-3" />
                  <span>Гарантия качества выполненных работ</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" className="h-6 w-6 text-green-500 mr-3" />
                  <span>Утилизация строительного мусора</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-900 rounded-lg p-8 text-white">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-orange-400">500+</div>
                    <div className="text-sm">Завершенных проектов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400">15</div>
                    <div className="text-sm">Лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400"></div>
                    <div className="text-sm">Единиц техники Brokk</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400">8 ч</div>
                    <div className="text-sm">Минимальная продолжительность рабочей смены</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Works Gallery */}
      <section id="works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Наши работы</h2>
            <p className="text-xl text-gray-600">Примеры успешно выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(/img/88b65f9b-618b-47b3-9c75-96b6452ac7eb.jpg)'}}>
              </div>
              <CardHeader>
                <CardTitle>Промышленный комплекс</CardTitle>
                <CardDescription>Демонтаж производственного цеха площадью 5000 м²</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Срок: 14 дней</span>
                  <span>Техника: Brokk 500</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(/img/9b48d916-c9e3-4c4d-b316-62e471fc1d2b.jpg)'}}>
              </div>
              <CardHeader>
                <CardTitle>Жилой комплекс</CardTitle>
                <CardDescription>Снос 5-этажного здания в центре города</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Срок: 21 день</span>
                  <span>Техника: Brokk 800</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: 'url(/img/610ba1cd-cd58-4b90-ba2f-5011752890f7.jpg)'}}>
              </div>
              <CardHeader>
                <CardTitle>Торговый центр</CardTitle>
                <CardDescription>Частичный демонтаж для реконструкции</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Срок: 10 дней</span>
                  <span>Техника: Brokk 300</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Услуги</h2>
            <p className="text-xl text-gray-600">Полный спектр демонтажных работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <Icon name="Hammer" className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Демонтаж зданий</h3>
              <p className="text-gray-600">Полный или частичный снос жилых и коммерческих зданий</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <Icon name="Wrench" className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Промышленный демонтаж</h3>
              <p className="text-gray-600">Демонтаж производственных линий и оборудования</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <Icon name="Truck" className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Вывоз мусора</h3>
              <p className="text-gray-600">Утилизация строительного мусора и металлолома</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <Icon name="HardHat" className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Алмазная резка</h3>
              <p className="text-gray-600">Точная резка бетона и железобетона</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
              <Icon name="Cog" className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Земляные работы</h3>
              <p className="text-gray-600">Подготовка территории и планировка участка</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <Icon name="AlertTriangle" className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Аварийный демонтаж</h3>
              <p className="text-gray-600">Экстренные работы в кратчайшие сроки</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-blue-100">Получите бесплатную консультацию и расчет стоимости</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-6 w-6 text-orange-400 mr-4" />
                  <div>
                    <div className="font-semibold">+7 (995) 600-88-60</div>
                    <div className="text-blue-100">Круглосуточно</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-6 w-6 text-orange-400 mr-4" />
                  <div>
                    <div className="font-semibold">info@demosnos.ru</div>
                    <div className="text-blue-100">Ответим в течение часа</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-6 w-6 text-orange-400 mr-4" />
                  <div>
                    <div className="font-semibold">Москва, ул. Строительная, 123</div>
                    <div className="text-blue-100">Офис и склад техники</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Получить расчет</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Опишите объект демонтажа" 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  ></textarea>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Получить расчет
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Hammer" className="h-8 w-8 text-orange-500 mr-2" />
                <span className="text-2xl font-bold">ДемоСнос</span>
              </div>
              <p className="text-gray-400">
                Профессиональный демонтаж с использованием роботизированных машин Brokk
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400">Демонтаж зданий</a></li>
                <li><a href="#" className="hover:text-orange-400">Промышленный демонтаж</a></li>
                <li><a href="#" className="hover:text-orange-400">Вывоз мусора</a></li>
                <li><a href="#" className="hover:text-orange-400">Алмазная резка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-orange-400">О нас</a></li>
                <li><a href="#works" className="hover:text-orange-400">Наши работы</a></li>
                <li><a href="#" className="hover:text-orange-400">Лицензии</a></li>
                <li><a href="#contact" className="hover:text-orange-400">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 123-45-67</div>
                <div>info@demosnos.ru</div>
                <div>Москва, ул. Строительная, 123</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ДемоСнос. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}