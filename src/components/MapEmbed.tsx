export default function MapEmbed() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-outline-variant shadow-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59935.11204698649!2d49.2650338!3d-12.3534475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21809fcbb8d7e0c1%3A0x8f5fe20c2c9bb7c5!2sAntsiranana%2C%20Madagascar!5e0!3m2!1sfr!2s!4v1700000000000!5m2!1sfr!2s"
        width="100%"
        height="350"
        style={{ border: 0, display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Carte Antsiranana — Acker Tech DS"
        aria-label="Carte Google Maps indiquant la localisation d'Acker Tech DS à Antsiranana, Madagascar"
      />
    </div>
  );
}