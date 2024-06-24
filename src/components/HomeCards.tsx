import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';
// Import Swiper modules
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';


const CardCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
      autoplay={{ delay: 5000 }}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      zoom={true}
      slidesPerView={1.2}
      spaceBetween={5}
      centeredSlides={true}
      loop={true}
    >
      <SwiperSlide>
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>Welcome to 7 Days To Visionary</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="ion-text-left">Congratulations on taking the first step towards unlocking your full potential as a filmmaker. Welcome to our deviate mentorship experience, designed to explore your interpersonal abilities and deepen your understanding of the psychology behind successful storytelling.</IonCardContent>


    </IonCard>
      </SwiperSlide>

      <SwiperSlide>
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>About the Program</IonCardTitle>
      </IonCardHeader>

      <IonCardContent className="ion-text-left">Our program is more than just guidance; it's a transformative journey tailored to help you turn your creative visions into reality. Here's how we'll support you along the way:
      <ul>
  <li><strong>Personalized Learning:</strong> Content that evolves with your progress to meet your unique needs.</li>
  <li><strong>Expert Guidance:</strong> Insights and advice from seasoned industry professionals.</li>
  <li><strong>Comprehensive Resources:</strong> Access to a wide range of tools, templates, and educational materials.</li>
  <li><strong>Community Support:</strong> A network of like-minded individuals and mentors to collaborate with and learn from.</li>
</ul></IonCardContent>    
</IonCard>
      </SwiperSlide>

      <SwiperSlide>
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>What You’ll Explore</IonCardTitle>
      </IonCardHeader>

      <IonCardContent className="ion-text-left">Throughout this strategy, you’ll dive deep into essential areas of communication, focusing on both practical skills and the critical soft skills that help drive consistency and success:
      <ul>
  <li><strong>Discovering Your Vision:</strong> Identify and articulate your core values and creative vision.</li>
  <li><strong>Planning and Goal Setting:</strong> Transform your vision into a structured plan with achievable goals.</li>
  <li><strong>Understanding Audience and Social Impact:</strong> Learn to engage your audience and understand the social implications of your work.</li>
  <li><strong>Creative Problem Solving and Innovation:</strong> Overcome creative blocks and explore new storytelling techniques.</li>
  <li><strong>Personal Branding and Identity:</strong> Define and refine your personal brand to stand out in the industry.</li>
  <li><strong>Resilience and Career Longevity:</strong> Build resilience and plan for long-term success in your career.</li>
  <li><strong>Reflecting and Planning:</strong> Regularly reflect on your progress and set future goals to keep moving forward.</li>
</ul></IonCardContent>    
</IonCard>
      </SwiperSlide>
      
      <SwiperSlide>
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>How the Framework Works</IonCardTitle>
      </IonCardHeader>

      <IonCardContent className="ion-text-left">
      <ol>
    <li><strong>Daily Prompts and Activities:</strong> Each day, you’ll receive carefully designed prompts and tasks to build your skills and knowledge systematically.</li>
    <li><strong>Interactive Exercises:</strong> You will engage in hands-on activities that reinforce learning and practical application.</li>
    <li><strong>Feedback and Reflection:</strong> Take advantage of regular opportunities to reflect on your progress and receive personalized feedback.</li>
    <li><strong>Vision Map Creation:</strong> At the end, you will have developed a comprehensive <strong>Vision Map</strong> that will transform your ideas into actionable projects, ensuring they are impactful and inspiring.</li>
  </ol></IonCardContent>    
</IonCard>
      </SwiperSlide>

      <SwiperSlide>
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>Engage with Our Community</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="ion-text-left">You are now part of a vibrant community that believes in the power of collaborative learning and support. Here’s what some of your fellow members have to say about their experiences:
      <ul>
        <li><em>"Jordan's vision is beyond vision! He is super zoomed in."</em> – <strong>Garnell Amersley</strong></li>
        <li><em>"Jordan has always seen things from a different perspective. He finds the beauty that most miss."</em> – <strong>Rosie Faria</strong></li>
        <li><em>"I've gained so much clarity and direction from the support and community built around emerging filmmakers."</em> – Alex T.</li>
        <li><em>"Jordan raised my standards for a DP because of how efficient and effective he was able to capture beautiful images."</em> – <strong>Jada Poon</strong></li>
      </ul></IonCardContent>    
</IonCard>
      </SwiperSlide>

      <SwiperSlide>
      <IonCard>
      <IonCardHeader>
        <IonCardTitle>Maximize Your Experience</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="ion-text-left">To get the most out of this program, we encourage you to:
        <ul>
          <li><strong>Stay Active:</strong> Participate in all daily activities and engage with the community.</li>
          <li><strong>Reflect Regularly:</strong> Take time to reflect on your progress and apply the feedback you receive.</li>
          <li><strong>Collaborate:</strong> Connect with fellow filmmakers, share your insights, and seek out collaboration opportunities.</li>
          <li><strong>Stay Open:</strong> Embrace new ideas, techniques, and perspectives to enhance your creative journey.</li>
        </ul>
      </IonCardContent>    
</IonCard>
      </SwiperSlide>
    </Swiper>
  );
};

export default CardCarousel;