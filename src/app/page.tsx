"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { BookOpen } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Главная",
          id: "hero",
        },
        {
          name: "Об авторе",
          id: "about",
        },
        {
          name: "Преимущества",
          id: "features",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="Библия Сваггерта"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "downward-rays-static",
      }}
      logoText="Библия с комментариями Джимми Сваггерта"
      description="Раскрой полноту Слова Божьего с помощью уникальных внутритекстовых комментариев. Глубокое богословское исследование для каждого верующего теперь в формате PDF."
      buttons={[
        {
          text: "Купить PDF сейчас — $19",
          href: "#pricing",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-device-table_23-2150994346.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Об авторе"
      title="Джимми Сваггерт"
      description="Более 50 лет служения, посвященных глубокому изучению Писания и проповеди Евангелия по всему миру."
      subdescription="Его авторские комментарии являются результатом десятилетий кропотливого труда, делая Писание доступным для понимания каждому читателю."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DGpfUugBjGtS9t1IUQGyuX9xot/uploaded-1777918810936-85ibu3tv.jpg"
      mediaAnimation="blur-reveal"
      icon={BookOpen}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "24/7 Цифровой доступ",
          description: "Читайте на планшете, телефоне или компьютере в любое время.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-communicating-online_1098-20936.jpg",
        },
        {
          title: "Уникальные комментарии",
          description: "Внутритекстовое толкование стихов без необходимости искать внешние словари.",
          imageSrc: "http://img.b2bpic.net/free-photo/page-old-book_1398-118.jpg",
        },
        {
          title: "Глубокое изучение",
          description: "Полнота всех 66 книг Ветхого и Нового Заветов для глубокого погружения.",
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-workspace-elements_1053-331.jpg",
        },
      ]}
      title="Почему стоит выбрать это издание?"
      description="Совершенный инструмент для вашего ежедневного духовного роста и изучения."
    />
  </div>

  <div id="deep-dive" data-section="deep-dive">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "66",
          title: "Книг Писания",
          items: [
            "Полный канонический текст",
            "Синодальный перевод",
            "Ветхий и Новый Завет",
          ],
        },
        {
          id: "m2",
          value: "100%",
          title: "Цифровая доступность",
          items: [
            "PDF-формат высокого качества",
            "Совместимость с любым устройством",
            "Мгновенная загрузка",
          ],
        },
        {
          id: "m3",
          value: "0",
          title: "Внешних словарей",
          items: [
            "Все толкования внутри текста",
            "Прямая связь комментария и стиха",
            "Максимальная концентрация",
          ],
        },
      ]}
      title="Ваш путь к духовному прорыву"
      description="Инструмент, который превращает чтение Библии в полноценное богословское исследование."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Алексей С.",
          role: "Служитель",
          company: "Церковь Христа",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-girl-holding-open-book_158595-703.jpg",
        },
        {
          id: "2",
          name: "Елена И.",
          role: "Учитель",
          company: "Воскресная школа",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/teenager-with-book-laptop-bed_23-2147777329.jpg",
        },
        {
          id: "3",
          name: "Дмитрий В.",
          role: "Студент",
          company: "Богословский колледж",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-reading-indoors_23-2150059014.jpg",
        },
        {
          id: "4",
          name: "Ольга Н.",
          role: "Верующая",
          company: "Домашняя группа",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-model-reading-book-red-wall_114579-56012.jpg",
        },
        {
          id: "5",
          name: "Сергей М.",
          role: "Миссионер",
          company: "Благовестие",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-energetic-spanish-guy-is-about-put-protective-mask_181624-51753.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "10к+",
          label: "Читателей",
        },
        {
          value: "5.0",
          label: "Средняя оценка",
        },
        {
          value: "100%",
          label: "Удовлетворенность",
        },
      ]}
      title="Что говорят наши читатели"
      description="Тысячи людей уже обогатили свое изучение Библии с этим изданием."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Как получить доступ к файлу?",
          content: "После оплаты вы мгновенно получите ссылку для скачивания PDF-файла на вашу почту.",
        },
        {
          id: "q2",
          title: "На каких устройствах можно читать?",
          content: "PDF-файл совместим со всеми устройствами: смартфонами, планшетами, электронными книгами и компьютерами.",
        },
        {
          id: "q3",
          title: "Какой перевод Библии используется?",
          content: "Это издание основано на классическом Синодальном переводе с комментариями Джимми Сваггерта.",
        },
        {
          id: "q4",
          title: "Нужен ли интернет для чтения?",
          content: "Нет, после скачивания PDF-файл доступен для чтения без подключения к интернету.",
        },
      ]}
      sideTitle="Часто задаваемые вопросы"
      sideDescription="Есть вопросы о формате или загрузке? Мы подготовили ответы."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "p1",
          badge: "PDF Edition",
          price: "$19",
          subtitle: "Мгновенный доступ",
          features: [
            "Все 66 книг Ветхого и Нового Заветов",
            "Уникальные комментарии",
            "Оптимизация для мобильных устройств",
            "Пожизненный доступ",
          ],
          buttons: [
            {
              text: "Купить PDF сейчас",
              href: "#",
            },
          ],
        },
      ]}
      title="Инвестируйте в свое духовное развитие сегодня"
      description="Получите полную цифровую версию Библии с комментариями всего за $19."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Библия Сваггерта"
      leftLink={{
        text: "Политика конфиденциальности",
        href: "#",
      }}
      rightLink={{
        text: "Свяжитесь с нами",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
