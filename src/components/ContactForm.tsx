"use client";

import { useState } from "react";
import { COMPANY } from "@/data";

const SERVICES = [
  "Flashage Android",
  "Installation OS",
  "Dépannage logiciel",
  "Site vitrine",
  "E-commerce",
  "CV & lettre",
];

interface FormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Votre nom est requis.";
    if (!form.phone.trim()) newErrors.phone = "Votre numéro est requis.";
    if (!form.message.trim()) newErrors.message = "Décrivez votre besoin.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const msg = encodeURIComponent(
      `Bonjour Acker Tech DS !\n\n` +
        `Nom : ${form.name}\n` +
        `Téléphone : ${form.phone}\n` +
        `Service : ${form.service || "Non précisé"}\n\n` +
        `Message :\n${form.message}`
    );

    window.open(`${COMPANY.whatsapp}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-outline-variant p-10 text-center">
        <p className="lux-eyebrow mb-4">Envoyé</p>
        <h3 className="font-serif text-3xl text-on-surface mb-3">Message prêt</h3>
        <p className="text-on-surface-variant mb-8">
          WhatsApp s&apos;est ouvert avec votre demande. Nous répondons sous deux jours ouvrés.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", phone: "", service: "", message: "" });
          }}
          className="lux-pill-ghost !text-on-surface !border-outline-variant"
        >
          Nouvelle demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate aria-label="Formulaire de contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="lux-eyebrow block mb-2">
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Votre nom"
            autoComplete="name"
            className="lux-input"
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-error text-xs mt-2" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="lux-eyebrow block mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+261 …"
            autoComplete="tel"
            className="lux-input"
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-error text-xs mt-2" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="lux-eyebrow mb-4">Sujet</p>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((service) => (
            <button
              key={service}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, service }))}
              className={`lux-chip ${form.service === service ? "lux-chip-active" : "hover:border-tertiary/50 hover:text-tertiary"}`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="lux-eyebrow block mb-2">
          Votre projet *
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Décrivez l'appareil, le site, ou le document…"
          rows={5}
          className="lux-input resize-none"
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-error text-xs mt-2" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button type="submit" className="btn-whatsapp">
        Envoyer via WhatsApp
      </button>
      <p className="text-xs text-on-surface-variant">
        La demande s&apos;ouvre dans WhatsApp. Aucun compte à créer.
      </p>
    </form>
  );
}
