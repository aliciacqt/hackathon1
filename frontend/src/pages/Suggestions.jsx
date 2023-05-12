import Form from "../components/Form";

export default function Suggestions() {
  return (
    <div className="text-center">
      <p className="m-6">
        Mon prochain voyage sera... à Hawaï !<br />
        Quelles sont vos suggestions d'activités ou de lieux à visiter
        <b> absolument</b> ?<br />
        Dites-moi tout dans le formulaire ci-dessous.
        <br />
        J'ai hâte de vous lire 🥥
      </p>
      <section className="flex flex-row justify-around">
        <img
          src="./src/assets/photos/haiwai1.jpg"
          alt="Hawaï beach"
          className="w-5/12"
        />
        <img
          src="./src/assets/photos/hawai2.jpg"
          alt="Hawaï landscape"
          className="w-5/12"
        />
      </section>

      <Form />
    </div>
  );
}
