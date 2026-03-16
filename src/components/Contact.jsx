import { FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram, FaWeixin, FaMapMarkerAlt } from 'react-icons/fa';

const contactItems = [
  {
    label: 'Phone',
    value: '+1 (437) 430‑3283',
    href: 'tel:+14374303283',
    icon: FaPhoneAlt,
    color: 'from-indigo-500 to-sky-400'
  },
  {
    label: 'GitHub',
    value: 'https://github.com/CadenzaMyFavourite',
    href: 'https://github.com/CadenzaMyFavourite',
    icon: FaGithub,
    color: 'from-slate-700 to-slate-500'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/jiaqi-zou-652084382',
    href: 'https://www.linkedin.com/in/jiaqi-zou-652084382',
    icon: FaLinkedin,
    color: 'from-blue-600 to-cyan-500'
  },
  {
    label: 'Instagram',
    value: 'jackiezou1214',
    href: 'https://www.instagram.com/jackiezou1214/',
    icon: FaInstagram,
    color: 'from-pink-500 to-fuchsia-500'
  },
  {
    label: 'WeChat',
    value: 'my68320458',
    icon: FaWeixin,
    color: 'from-emerald-400 to-teal-500'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="relative mt-16 scroll-mt-24">
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Contact
          </h2>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            Whether you want to collaborate on a project, chat about AI, or just say hi — here’s how to reach me.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const isLink = Boolean(item.href);

              return (
                <div
                  key={item.label}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-6 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm transition group-hover:scale-105`}
                    aria-hidden="true"
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    {isLink ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm text-white/70 transition hover:text-white"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-white/70">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="https://www.google.com/maps/place/Richmond+Hill,+ON"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-xl backdrop-blur-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative h-60 overflow-hidden">
              <iframe
                title="Richmond Hill, Ontario map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29032.01184517301!2d-79.43532238845088!3d43.88003689261774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b22ad6319845d%3A0x97d0f2d6c1006135!2sRichmond%20Hill%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center justify-between gap-3 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white shadow-sm">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Richmond Hill, Ontario</p>
                  <p className="text-xs text-white/60">Open in Google Maps</p>
                </div>
              </div>
              <span className="text-xs font-medium text-white/50 transition group-hover:text-white">
                View map
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
