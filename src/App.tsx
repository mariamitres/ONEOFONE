import { FormEvent, useEffect, useState } from "react";

const A = "/assets/";

type Project = {
  slug: string;
  name: string;
  category: string;
  image: string;
  cardLabel?: string;
};

const featured: Project[] = [
  {
    slug: "sage-and-stone",
    name: "Sage & Stone",
    category: "Branding / Visual Identity",
    image: "937fc.jpg",
  },
  {
    slug: "baby-basics",
    name: "Baby Basics",
    category: "Digital / Art Direction",
    image: "60df4.png",
  },
  {
    slug: "the-green-edit",
    name: "The Green Edit",
    category: "Editorial / Print",
    image: "890bc.png",
  },
];

const work: Project[] = [
  { slug: "behind-the-project", name: "BEHIND THE PROJECT", category: "01", image: "cbdb7.png" },
  { slug: "tfj", name: "TFJ", category: "02", image: "5810d.png" },
  { slug: "off-grid", name: "OFF GRID", category: "03", image: "1bf62.jpg" },
  {
    slug: "root-nova",
    name: "ROOT/NOVA",
    category: "04",
    image: "ab105.png",
    cardLabel: "04\u00A0\u00A0CASA NATŮRA",
  },
  {
    slug: "casa-natura",
    name: "CASA NATŮRA",
    category: "05",
    image: "2cf96.png",
    cardLabel: "05 ROOT/NOVA",
  },
  {
    slug: "root-nova-packaging",
    name: "ROOT/NOVA",
    category: "06",
    image: "d3acc.jpg",
    cardLabel: "06 FLORES DE LA SIERRA",
  },
];

type CaseStudyContent = {
  title: string;
  discipline: string;
  sections: Array<{ heading: string; body: string }>;
};

const caseStudies: Record<string, CaseStudyContent> = {
  "sage-and-stone": {
    title: "SAGE & STONE",
    discipline: "Branding / Visual Identity",
    sections: [
      {
        heading: "THE PROJECT",
        body: "Sage & Stone is a skincare branding project focused on creating a clean, minimal, and timeless visual identity. The idea was to develop a brand that feels natural, sophisticated, and approachable while keeping the overall design simple.",
      },
      {
        heading: "MY ROLE",
        body: "Brand identity, packaging design, typography, and visual direction.",
      },
      {
        heading: "THE PROCESS",
        body: "I explored different skincare references, neutral color palettes, and minimal packaging styles. I focused on finding a balance between simplicity and personality, experimenting with typography, subtle graphic elements, and label compositions to create a consistent visual direction.",
      },
      {
        heading: "THE SOLUTION",
        body: "A minimal branding system that combines clean typography, soft neutral colors, and simple packaging details. The overall identity feels modern and sophisticated while allowing the products to stand out.",
      },
      {
        heading: "THE RESULT",
        body: "A cohesive skincare brand with a refined and recognizable identity that works across different products and packaging applications.",
      },
    ],
  },
  "baby-basics": {
    title: "BABY BASICS",
    discipline: "Digital / Art Direction",
    sections: [
      {
        heading: "THE PROJECT",
        body: "Baby Basics is a creative project focused on developing a playful and approachable visual identity for baby essentials. The goal was to create a design that feels soft, friendly, and visually engaging while still looking clean and modern.",
      },
      {
        heading: "MY ROLE",
        body: "Art direction, visual identity, packaging design, and digital design.",
      },
      {
        heading: "THE PROCESS",
        body: "I explored pastel color palettes, playful shapes, and simple illustrations inspired by baby products. I wanted the design to feel fun without becoming overwhelming, so I experimented with soft colors, rounded elements, and different packaging compositions.",
      },
      {
        heading: "THE SOLUTION",
        body: "A playful visual system that combines pastel colors, friendly illustrations, and simple typography. The packaging uses soft shapes and cute details to create a recognizable identity across different baby products.",
      },
      {
        heading: "THE RESULT",
        body: "A cohesive and approachable visual identity that makes everyday baby essentials feel more playful and visually connected.",
      },
    ],
  },
  "the-green-edit": {
    title: "THE GREEN EDIT",
    discipline: "Editorial / Print",
    sections: [
      {
        heading: "THE PROJECT",
        body: "The Green Edit is an editorial design project dedicated to matcha, exploring its culture, visual identity, and growing popularity. The idea was to create a publication that combines information and visual storytelling in a contemporary and engaging way.",
      },
      {
        heading: "MY ROLE",
        body: "Editorial design, art direction, typography, and layout composition.",
      },
      {
        heading: "THE PROCESS",
        body: "I explored matcha-inspired photography, green color palettes, typography, and editorial references. I experimented with different layouts and image compositions to create a publication that feels fresh, modern, and visually interesting.",
      },
      {
        heading: "THE SOLUTION",
        body: "A contemporary editorial publication that combines vibrant matcha photography, bold typography, and clean layouts. The green tones and expressive compositions create a strong visual identity throughout the book.",
      },
      {
        heading: "THE RESULT",
        body: "A visually engaging publication that presents matcha through a fresh and modern editorial perspective, bringing together design, photography, and storytelling.",
      },
    ],
  },
  "behind-the-project": {
    title: "BEHIND THE PROJECT",
    discipline: "Editorial Design",
    sections: [
      {
        heading: "THE PROJECT",
        body: "Behind the Project is an editorial project that explores the creative decisions and details that go into design. The idea was to create a publication where typography, images, and composition work together to tell a visual story.",
      },
      {
        heading: "MY ROLE",
        body: "Editorial design, visual direction, typography, and layout.",
      },
      {
        heading: "THE PROCESS",
        body: "I started by exploring different editorial references, typography, and compositions. I experimented with image placement, scale, and negative space to create layouts that felt interesting but still connected. I wanted every spread to have its own personality while maintaining a consistent visual style.",
      },
      {
        heading: "THE SOLUTION",
        body: "A contemporary editorial publication that combines expressive typography, strong imagery, and clean compositions. Each spread creates a different visual experience while maintaining a cohesive design.",
      },
      {
        heading: "THE RESULT",
        body: "A publication that shows how typography, photography, and small design decisions can completely change the way we experience visual content.",
      },
    ],
  },
  tfj: {
    title: "TFJ",
    discipline: "Monogram & Packaging Design",
    sections: [
      {
        heading: "THE PROJECT",
        body: "TFJ is a monogram design project focused on creating an elegant and recognizable identity through typography. The idea was to combine three letters into one unique symbol that feels timeless and personal.",
      },
      {
        heading: "MY ROLE",
        body: "Monogram design, typography, visual identity, and packaging application.",
      },
      {
        heading: "THE PROCESS",
        body: "I started by sketching different ways to connect the three letters. I explored proportions, curves, and letter combinations until I found a composition that felt balanced. I focused on making the letters work together naturally without losing their individual shapes.",
      },
      {
        heading: "THE SOLUTION",
        body: "A custom monogram with elegant, flowing letterforms and a timeless aesthetic. I applied the final design to a wine bottle to explore how the identity could work on a physical product.",
      },
      {
        heading: "THE RESULT",
        body: "A refined monogram that feels personal, recognizable, and versatile enough to be used across different applications.",
      },
    ],
  },
  "off-grid": {
    title: "OFF GRID",
    discipline: "Editorial Design",
    sections: [
      {
        heading: "THE PROJECT",
        body: "Off Grid is an editorial project that explores the relationship between photography, typography, and storytelling. The goal was to create a publication where the images take center stage while the design helps communicate the story behind them.",
      },
      {
        heading: "MY ROLE",
        body: "Editorial design, art direction, typography, and layout composition.",
      },
      {
        heading: "THE PROCESS",
        body: "I explored different editorial layouts, photography styles, and typographic combinations. I experimented with image sizes, placement, and white space to find the right balance between the visual elements. I wanted the publication to feel modern and interesting without becoming overwhelming.",
      },
      {
        heading: "THE SOLUTION",
        body: "A minimal editorial design that combines strong photography, clean typography, and thoughtful compositions. Each spread has its own visual rhythm while maintaining a consistent style throughout the publication.",
      },
      {
        heading: "THE RESULT",
        body: "A contemporary editorial publication that allows photography and design to work together, creating a cohesive visual experience.",
      },
    ],
  },
  "root-nova": {
    title: "CASA NATÜRA",
    discipline: "Branding & Packaging Design",
    sections: [
      {
        heading: "THE PROJECT",
        body: "Casa Natüra is a branding and packaging project centered around natural skincare products. The idea was to create a brand that feels simple, warm, and connected to nature while maintaining a modern aesthetic.",
      },
      {
        heading: "MY ROLE",
        body: "Brand identity, packaging design, typography, and visual direction.",
      },
      {
        heading: "THE PROCESS",
        body: "I started by exploring natural colors, textures, and simple packaging references. I experimented with typography and visual elements to find a direction that felt organic but still contemporary. I wanted the packaging to feel clean and recognizable while giving each product its own personality.",
      },
      {
        heading: "THE SOLUTION",
        body: "A minimal visual identity that combines earthy tones, subtle typography, and simple packaging details. The different colors help distinguish each product while keeping the entire collection visually connected.",
      },
      {
        heading: "THE RESULT",
        body: "A cohesive skincare identity that feels natural, modern, and approachable, with packaging that communicates the brand's personality through simple design choices.",
      },
    ],
  },
  "casa-natura": {
    title: "ROOT/NOVA",
    discipline: "Branding & Packaging Design",
    sections: [
      {
        heading: "THE PROJECT",
        body: "Root/Nova is a branding and packaging project focused on creating a modern visual identity for haircare products. The goal was to develop a design system that feels clean, sophisticated, and recognizable.",
      },
      {
        heading: "MY ROLE",
        body: "Visual identity, typography, packaging design, and art direction.",
      },
      {
        heading: "THE PROCESS",
        body: "I explored different typographic styles, packaging formats, and color combinations. I focused on finding a balance between minimal design and visual personality. I experimented with the placement and scale of typography to create a system that would work consistently across different products.",
      },
      {
        heading: "THE SOLUTION",
        body: "A contemporary packaging system that combines neutral colors, contrasting typography, and structured compositions. Each product follows the same visual language while maintaining its own identity within the collection.",
      },
      {
        heading: "THE RESULT",
        body: "A modern haircare brand with a consistent and recognizable visual identity that works across different packaging formats.",
      },
    ],
  },
  "root-nova-packaging": {
    title: "FLORES DE LA SIERRA",
    discipline: "Branding & Packaging Design",
    sections: [
      {
        heading: "THE PROJECT",
        body: "Flores de la Sierra is a branding and packaging project inspired by flowers and botanical elements. The idea was to create a natural and thoughtful visual identity where each product feels unique while still being part of the same collection.",
      },
      {
        heading: "MY ROLE",
        body: "Brand identity, packaging design, illustration, typography, and visual direction.",
      },
      {
        heading: "THE PROCESS",
        body: "I started by exploring botanical references, floral illustrations, and earthy color palettes. I experimented with different packaging compositions and typography to create a visual system that felt organic and timeless. I wanted each product to have its own personality while maintaining a consistent design throughout the collection.",
      },
      {
        heading: "THE SOLUTION",
        body: "A packaging system that combines simple floral illustrations, natural colors, and clean typography. Each product uses a different color and botanical reference while following the same overall design structure.",
      },
      {
        heading: "THE RESULT",
        body: "A cohesive packaging collection that feels natural, timeless, and visually connected, while giving each product its own distinctive character.",
      },
    ],
  },
};

function go(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "instant" });
}

function Link({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={to}
      onClick={(event) => {
        if (!event.metaKey && !event.ctrlKey) {
          event.preventDefault();
          go(to);
        }
      }}
    >
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["Work", "/work"],
    ["Services", "/services"],
    ["Studio", "/studio"],
    ["Contact", "/contact"],
  ];
  return (
    <header className="site-header">
      <Link to="/" className="mark" aria-label="One of One home">
        <img src={`${A}45195.svg`} alt="" />
      </Link>
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav className={open ? "open" : ""} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <Link key={href} to={href} className={window.location.pathname === href ? "active" : ""}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <Link to="/" className="footer-brand">
        ONE <em>OF</em> ONE<sup>®</sup>
      </Link>
      <Link to="/contact" className="footer-contact">
        <span>GET IN TOUCH</span>
        oneofonestudio@gmail.com
      </Link>
      <div className="socials">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          INSTAGRAM
        </a>
        <a href="https://behance.net" target="_blank" rel="noreferrer">
          BEHANCE
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LINKEDIN
        </a>
      </div>
    </footer>
  );
}

function ButtonLink({
  to,
  children,
  filled = false,
}: {
  to: string;
  children: React.ReactNode;
  filled?: boolean;
}) {
  return (
    <Link className={`button ${filled ? "filled" : ""}`} to={to}>
      {children}
    </Link>
  );
}

function Home() {
  return (
    <main>
      <section className="home-intro page-width">
        <p className="eyebrow">01- Studio</p>
        <img
          className="studio-wordmark"
          src={`${A}one-of-one-home-logo.png`}
          alt="ONE OF ONE Studio"
        />
        <div className="intro-copy">
          <p>
            Branding, editorial and visual identities designed
            <br />
            to feel intentional, timeless, and one of a kind.
          </p>
          <div className="button-row">
            <ButtonLink to="/work" filled>
              View Work →
            </ButtonLink>
            <ButtonLink to="/contact">Get in Touch</ButtonLink>
          </div>
        </div>
        <div className="intro-art">
          <span />
          <img
            src={`${A}08f75.png`}
            alt="El Recetario de Neni brand website displayed on a laptop"
          />
        </div>
      </section>

      <section className="page-width work-preview">
        <div className="section-heading ruled">
          <div>
            <p className="eyebrow">02- Work</p>
            <h1>Featured Work</h1>
          </div>
        </div>
        <div className="featured-grid">
          {featured.map((project) => (
            <Link to={`/projects/${project.slug}`} className="featured-card" key={project.slug}>
              <div className="image-wrap">
                <img src={`${A}${project.image}`} alt={project.name} />
              </div>
              <p className="category">{project.category}</p>
              <h2>{project.name}</h2>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-width creative-edit">
        <div className="edit-heading">
          <div>
            <p className="eyebrow">02- Edit</p>
            <h1>The Creative Edit</h1>
          </div>
          <p>
            A curated look at the images, colors and typography
            <br />
            that reflect our studio’s visual language.
          </p>
        </div>
        <div className="edit-board">
          <img src={`${A}168d6.jpg`} alt="Editorial typography inspiration" />
          <img src={`${A}c023d.jpg`} alt="Burgundy print design inspiration" />
          <div className="palette-piece">
            <img src={`${A}e844d.jpg`} alt="Burgundy editorial book" />
            <div className="swatches">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeaturedWork() {
  return (
    <main className="page-width placeholder-page">
      <h1>FEATURED WORK</h1>
      <div className="placeholder-grid">
        <Link
          to="/projects/sage-and-stone"
          className="placeholder hero-placeholder"
          aria-label="Sage and Stone project"
        />
        <Link to="/projects/baby-basics" className="placeholder" aria-label="Baby Basics project" />
        <Link
          to="/projects/the-green-edit"
          className="placeholder"
          aria-label="The Green Edit project"
        />
        {[0, 1, 2, 3].map((n) => (
          <Link
            key={n}
            to={`/projects/${featured[n % 3].slug}`}
            className="placeholder small"
            aria-label={featured[n % 3].name}
          />
        ))}
      </div>
    </main>
  );
}

function Work() {
  return (
    <main className="page-width work-page">
      <h1>WORK</h1>
      <div className="work-grid">
        {work.map((project, index) => (
          <Link
            to={`/projects/${project.slug}`}
            className={`work-card card-${index + 1}`}
            key={project.slug}
          >
            <div>
              <img src={`${A}${project.image}`} alt={project.name} />
            </div>
            <p>{project.cardLabel ?? `${project.category}\u00A0 ${project.name}`}</p>
          </Link>
        ))}
      </div>
      <div className="center">
        <ButtonLink to="/featured-work">LOAD MORE PROJECTS →</ButtonLink>
      </div>
      <Link to="/contact" className="next-project">
        IS YOUR PROJECT NEXT?
      </Link>
    </main>
  );
}

const services = [
  {
    number: "01",
    title: "BRANDING",
    image: "d3acc.jpg",
    items: ["BRAND STRATEGY", "NAMING", "LOGO & VISUAL IDENTITY SYSTEM", "BRAND GUIDELINES"],
  },
  {
    number: "02",
    title: "EDITORIAL",
    image: "1bf62.jpg",
    items: ["MAGAZINES & BOOKS", "CATALOGS", "REPORTS", "ART DIRECTION"],
  },
  {
    number: "03",
    title: "VISUAL IDENTITY",
    image: "91890.jpg",
    items: ["COLOR PALETTE, TYPOGRAPHY", "PACKAGING", "STATIONARY", "SIGNAGE"],
  },
  {
    number: "04",
    title: "DIGITAL",
    image: "611a7.png",
    items: ["WEB DESIGN", "SOCIAL MEDIA", "MOTION", "CAMPAIGNS"],
  },
];

function Services() {
  const faqs = [
    [
      "How long does a branding project take?",
      "Timelines are confirmed after the scope and deliverables are defined.",
    ],
    ["Do you work with brands outside of Mexico?", "Yes, the studio can collaborate remotely."],
    [
      "What’s Included in the Brand Guidelines?",
      "The final contents are tailored to the selected identity scope.",
    ],
    ["How are they priced?", "Each proposal is priced around the project scope and deliverables."],
  ];
  return (
    <main className="page-width services-page">
      <section className="services-title">
        <div>
          <p className="eyebrow">WHAT WE DO</p>
          <h1>SERVICES</h1>
        </div>
        <p>
          Four disciplines, one single principle
          <br />
          designing something that can belong only
          <br />
          to your brand.
        </p>
      </section>
      <section className="service-list">
        {services.map((service) => (
          <article className="service" key={service.number}>
            <div>
              <h2>
                {service.number} {service.title}
              </h2>
              <p>Description</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <img src={`${A}${service.image}`} alt={`${service.title} service example`} />
          </article>
        ))}
      </section>
      <section className="process">
        <p className="eyebrow">PROCESS</p>
        <div className="process-grid">
          {[
            {
              title: "Listen",
              description:
                "We start by getting to know you, your brand, your ideas, and what you want to achieve.",
            },
            {
              title: "Explore",
              description:
                "We research, gather inspiration, and explore different creative directions for your brand.",
            },
            {
              title: "Define",
              description:
                "We bring everything together to create a clear visual direction that reflects your brand's personality.",
            },
            {
              title: "Output",
              description:
                "We bring your brand to life through the final designs, making sure everything feels consistent and ready to use.",
            },
          ].map((step, i) => (
            <article key={step.title}>
              <small>STEP 0{i + 1}</small>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="faq">
        <p className="eyebrow"></p>
        <div>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>[{q}]</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="services-cta">
        <h2>
          WE DESIGN SOMETHING
          <br />
          THAT IS UNIQUELY YOURS
        </h2>
        <ButtonLink to="/contact">Start A Project →</ButtonLink>
      </section>
    </main>
  );
}

function Studio() {
  const team = [
    ["ISABELA VITAL", "isabela-vital-portrait.jpg"],
    ["FERNANDA MITRE", "9d7a3.jpg"],
    ["CRISTINA ZAMBRANO", "2fe9d.jpg"],
  ];
  return (
    <main className="page-width studio-page">
      <p className="eyebrow">ABOUT US</p>
      <h1>STUDIO</h1>
      <div className="team-hero">
        <img src={`${A}a6419.png`} alt="The three ONE OF ONE studio founders" />
      </div>
      <section className="story">
        <p className="eyebrow">OUR STORY</p>
        <p>
          ONE OF ONE was born from three creative minds with a shared passion for branding and
          design. We wanted to create a studio where different ideas and perspectives come together
          to build unique identities. Our name reflects what we believe in: every brand has its own
          story, personality, and something that makes it one of a kind.
        </p>
      </section>
      <section className="team-grid">
        {team.map(([name, image]) => (
          <article key={name}>
            <img
              className={name === "ISABELA VITAL" ? "isabela-portrait" : undefined}
              src={`${A}${image}`}
              alt={name}
            />
            <h2>{name}</h2>
          </article>
        ))}
      </section>
      <section className="studio-cta">
        <h2>EACH BRAND IS ONE OF ONE</h2>
        <ButtonLink to="/contact">Let’s work together! →</ButtonLink>
      </section>
    </main>
  );
}

type FormErrors = Partial<Record<"name" | "email" | "project" | "message", string>>;

function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: FormErrors = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const project = String(data.get("project") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (!project) next.project = "Please enter a project type.";
    if (message.length < 10) next.message = "Please share at least 10 characters.";
    setErrors(next);
    setStatus("idle");
    if (Object.keys(next).length > 0) return;

    const body = new URLSearchParams();
    data.forEach((value, key) => body.append(key, String(value)));

    setStatus("submitting");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed with status ${response.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <label>
        NAME *<input name="name" aria-invalid={!!errors.name} />
        {errors.name && <span>{errors.name}</span>}
      </label>
      <label>
        EMAIL *<input name="email" type="email" aria-invalid={!!errors.email} />
        {errors.email && <span>{errors.email}</span>}
      </label>
      <label className="wide">
        PROJECT TYPE *<input name="project" aria-invalid={!!errors.project} />
        {errors.project && <span>{errors.project}</span>}
      </label>
      <label className="wide">
        MESSAGE *<textarea name="message" aria-invalid={!!errors.message} />
        {errors.message && <span>{errors.message}</span>}
      </label>
      <button className="button filled" type="submit" disabled={status === "submitting"}>
        Send Message　 →
      </button>
      {status === "success" && (
        <p className="success" role="status">
          Thank you. Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="form-error" role="alert">
          Your message could not be sent. Please try again.
        </p>
      )}
    </form>
  );
}

function Contact() {
  const social = [
    ["EMAIL", "oneofonestudio@gmail.com", "mailto:oneofonestudio@gmail.com"],
    ["INSTAGRAM", "@oneofonestudio", "https://instagram.com"],
    ["BEHANCE", "oneofonestudio", "https://behance.net"],
    ["LINKEDIN", "One of One Studio", "https://linkedin.com"],
  ];
  return (
    <main className="page-width contact-page">
      <section className="contact-hero">
        <div>
          <p className="eyebrow">02- Work</p>
          <h1>FEAUTURED WORK</h1>
          <p>
            We’d love to hear from you. Whether you’re a potential client, a creative collaborator,
            or simply want to say hello, get in touch we’re always open to new conversations.
          </p>
        </div>
        <div className="contact-art">
          <span />
          <img src={`${A}a8b17.png`} alt="Bright orange packaging project" />
        </div>
      </section>
      <section className="contact-grid">
        <div className="contact-info">
          <p>Reach out directly or connect with us on our creative platforms.</p>
          {social.map(([label, value, href]) => (
            <a
              href={href}
              key={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              <strong>{label}</strong>
              <span>{value}</span>
              <i>→</i>
            </a>
          ))}
        </div>
        <ContactForm />
      </section>
      <section className="contact-cta">
        <p className="eyebrow">02- Start A Project</p>
        <h2>
          Tell Us About
          <br />
          Your Idea
        </h2>
        <p>
          Have a project in mind? Share a few
          <br />
          details and let’s explore how we can
          <br />
          bring it to life together.
        </p>
        <ButtonLink to="/contact">Start a Project →</ButtonLink>
      </section>
    </main>
  );
}

function ProjectPage({ slug }: { slug: string }) {
  const project = [...featured, ...work].find((item) => item.slug === slug) || featured[0];
  const caseStudy = caseStudies[slug];
  const isFeaturedProject = featured.some((item) => item.slug === slug);
  const sections =
    caseStudy?.sections ??
    ["Project introduction", "Problem", "Process", "Outcome"].map((heading, index) => ({
      heading,
      body: index === 0 ? `${project.name}\n${project.category}` : "",
    }));
  return (
    <main className="page-width project-page">
      <p className="eyebrow">CASE STUDY</p>
      <h1>{caseStudy?.title ?? project.name}</h1>
      <p className="project-category">{caseStudy?.discipline ?? project.category}</p>
      <div className="project-hero">
        <img src={`${A}${project.image}`} alt={project.name} />
      </div>
      <section className="case-sections">
        {sections.map((section, index) => (
          <article key={section.heading}>
            <span>0{index + 1}</span>
            <h2>{section.heading}</h2>
            {section.body && <p className="whitespace-pre-line">{section.body}</p>}
          </article>
        ))}
      </section>
      <div className="project-next">
        <ButtonLink to={isFeaturedProject ? "/" : "/work"}>
          {isFeaturedProject ? "Back to Home →" : "Back to Work →"}
        </ButtonLink>
      </div>
    </main>
  );
}

function useScrollReveal(path: string) {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll<HTMLElement>(
      "main > section, .featured-card, .work-card, .service, .team-grid article, .case-sections article",
    );

    elements.forEach((element, index) => {
      element.classList.add("motion-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 3) * 90}ms`);
    });

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [path]);
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  useScrollReveal(path);
  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  let page: React.ReactNode;
  if (path === "/") page = <Home />;
  else if (path === "/featured-work") page = <FeaturedWork />;
  else if (path === "/work") page = <Work />;
  else if (path === "/services") page = <Services />;
  else if (path === "/studio") page = <Studio />;
  else if (path === "/contact") page = <Contact />;
  else if (path.startsWith("/projects/")) page = <ProjectPage slug={path.split("/").pop() || ""} />;
  else page = <Home />;
  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
}

export default App;
