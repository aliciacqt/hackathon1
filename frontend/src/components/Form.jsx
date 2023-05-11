import { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    suggestions: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Réinitialiser les valeurs du formulaire
    setFormValues({
      userName: "",
      email: "",
      suggestions: "",
    });
    // Afficher le message de confirmation
    setIsSubmitted(true);
  };

  return (
    <>
      {isSubmitted && (
        <p className="text-center bg-darksand text-ligthsand w-full mt-6 p-6">
          Merci pour votre suggestion, à bientôt pour une prochaine idée de
          voyage !
        </p>
      )}

      <container className="flex justify-center">
        <form className="flex flex-col items-center w-4/5 m-6 pb-8">
          <p className="text-center mb-2">Vos suggestions</p>
          <input
            name="userName"
            placeholder="Votre nom ou pseudonyme"
            className="bg-white p-2 m-2 text-center w-4/5 rounded-lg border border-darksand"
            type="text"
            value={formValues.userName}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Votre adresse email"
            className="bg-white p-2 m-2 text-center w-4/5 rounded-lg border border-darksand"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="suggestions"
            placeholder="Vos suggestions"
            className="bg-white p-2 m-2 text-center w-4/5 h-40 rounded-lg border border-darksand"
            type="text"
            value={formValues.suggestions}
            onChange={handleChange}
            required
          />
          <button
            className="bg-blue m-2 mt-4 pt-1 pb-1 w-1/2 shadow-[2px_4px_0px_-0px] shadow-sand text-ligthsand"
            type="button"
            onClick={handleSubmit}
          >
            Envoyer
          </button>
        </form>
      </container>
    </>
  );
}
