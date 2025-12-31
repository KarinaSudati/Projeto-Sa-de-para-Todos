import React from "react";
import { Link } from "react-router-dom";
import S from "./voluntario.module.scss";
import { useEffect } from "react";

export default function SejaVoluntario() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={S.voluntarioPage}>
      <section className={S.headerVoluntario}>
        <h1>Seja voluntario</h1>
        <p>Junte-se a nós e faça a diferença na vida de pessoas que precisam</p>
      </section>

      <section className={S.incentivos}>
        <div className={S.incentivoCard}>
          <h3>Impacto Direto</h3>
          <p>Sua dedicação salva vidas e transforma comunidades</p>
        </div>

        <div className={S.incentivoCard}>
          <h3>Crescimento Pessoal</h3>
          <p>Desenvolva habilidades e cresça profissionalmente</p>
        </div>

        <div className={S.incentivoCard}>
          <h3>Comunidade</h3>
          <p>Faça parte de uma rede de profissionais comprometidos</p>
        </div>
      </section>

      <section className={S.formSection}>
        <div className={S.formContainer}>
          <h2>Inscrição para Voluntários</h2>

          <form className={S.form}>
            <fieldset>
              <legend>Dados Pessoais</legend>
              <div className={S.inputGroup}>
                <input type="text" placeholder="Seu Nome *" required />
                <input type="email" placeholder="Seu Email *" required />
              </div>
              <input
                type="tel"
                placeholder="Seu Telefone *"
                className={S.fullInput}
                required
              />
            </fieldset>

            <fieldset>
              <legend>Mensagem Adicional</legend>
              <textarea placeholder="Conte-nos porque você quer ser voluntário..."></textarea>
            </fieldset>

            <p className={S.aviso}>
              Entraremos em contato para mais informações
            </p>
            <button type="submit" className={S.btnEnviar}>
              Enviar Inscrições
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
