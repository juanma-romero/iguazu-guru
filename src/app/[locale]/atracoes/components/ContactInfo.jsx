const ContactInfo = ({ contacto }) => {
  if (!contacto) return null;

  const hasContact = contacto.whatsapp || contacto.telefono || contacto.email;

  if (!hasContact) return null;

  return (
    <div className="mb-4">
      <h3 className="font-semibold text-gray-700 mb-2">📞 Contacto</h3>
      <div className="space-y-1">
        {contacto.whatsapp && (
          <a
            href={`https://wa.me/${contacto.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-green-600 hover:text-green-800"
          >
            📱 WhatsApp: {contacto.whatsapp}
          </a>
        )}
        {contacto.telefono && (
          <a
            href={`tel:${contacto.telefono}`}
            className="block text-sm text-blue-600 hover:text-blue-800"
          >
            📞 Teléfono: {contacto.telefono}
          </a>
        )}
        {contacto.email && (
          <a
            href={`mailto:${contacto.email}`}
            className="block text-sm text-purple-600 hover:text-purple-800"
          >
            ✉️ Email: {contacto.email}
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactInfo;
