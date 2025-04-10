"use client";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
    return (
        <section id={id} className="mb-8">
            <div className="text-h3 text-black mb-5">{title}</div>
            {children}
        </section>
    );
};

export default Section;
