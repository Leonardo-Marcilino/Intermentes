import React, { useState } from "react";
import "../../Componentes/Faq/Faq.css";
import FAQ from "../../Componentes/Faq/FaqComponent";

export default function Faq() {
    const [faqs, setFaqs] = useState([
      {
        question: "Como se cadastrar:",
        answer:
          "Insira suas informações pessoais e crie uma senha, logo em seguida verifique seu e-mail para confirmar o cadastro, complete seu perfil com informações adicionais e se sinta livre para escolher um psicólogo e agendar sua primeira sessão.",
        open: true
      },
      {
        question: "Como funciona:",
        answer: "A terapia online na Intermentes é realizada por meio de videochamadas. Após se cadastrar e escolher um psicólogo, você poderá agendar sessões de acordo com sua disponibilidade. Na primeira sessão, o psicólogo fará uma avaliação inicial para entender suas necessidades e estabelecer um plano de tratamento. As sessões são flexíveis e podem ser adaptadas conforme seu progresso e feedback.",
        open: false
      },
      {
        question:
          "Como escolher o psicólogo",
        answer: "Acreditamos que a saúde mental é um direito para todos, independentemente de idade, gênero, deficiência, raça, etnia, origem, religião, condição econômica ou quaisquer outras características. Nossos psicólogos são especialistas em diversas áreas para atender às suas necessidades específicas. Nossa equipe está pronta para oferecer suporte emocional e psicológico para indivíduos, casais, famílias, adolescentes e pacientes com condições médicas específicas, como o câncer. Conte conosco para te ajudar, seja qual for a sua escolha.",
        open: false
      },
      {
        question:
          "Confidencialidade",
        answer: "A confidencialidade é uma prioridade na Intermentes, garantindo que suas conversas permaneçam privadas. Nossos psicólogos seguem estritamente os códigos de ética profissional e as leis de privacidade. Além disso, suas sessões só são gravadas com seu consentimento explícito. Todas as suas informações pessoais e de saúde são mantidas em segurança.",
        open: false
      }
    ]);
  
    const toggleFAQ = index => {
      setFaqs(
        faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open;
          } else {
            faq.open = false;
          }
  
          return faq;
        })
      );
    };
  
    return (
      <div className="App">
        <div className="faqs">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    );
  }
  