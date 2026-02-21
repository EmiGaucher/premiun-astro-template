import { useState } from 'preact/hooks';

const testimonials = [
    {
        content: "This template has completely transformed how our team builds landing pages. The performance is unbeatable.",
        author: "Sarah Jenkins",
        role: "CDO at TechFlow",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        content: "The cleanest Astro template I've ever used. The attention to detail in the components is incredible.",
        author: "Michael Chen",
        role: "Fullstack Engineer",
        avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
        content: "We launched our MVP in 3 days using this template. Our investors were blown away by the design quality.",
        author: "Alex Rivera",
        role: "Founder of SpeedUp",
        avatar: "https://i.pravatar.cc/150?u=alex"
    }
];


export default function TestimonialSlider() {
    const [active, setActive] = useState(0);

    return (
        <div className="relative w-full max-w-4xl mx-auto px-4">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${active * 100}%)` }}
                >
                    {testimonials.map((t, i) => (
                        <div key={i} className="w-full flex-shrink-0 px-4">
                            <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
                                <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed italic">
                                    "{t.content}"
                                </blockquote>
                                <div className="flex flex-col items-center">
                                    <img src={t.avatar} alt={t.author} className="w-16 h-16 rounded-full mb-4 border-2 border-primary/20" />
                                    <div className="font-bold text-lg">{t.author}</div>
                                    <div className="text-sm text-muted-foreground">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`w-3 h-3 rounded-full transition-all ${active === i ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-primary/50'}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                    />
                ))}
            </div>

            <button
                onClick={() => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>

            <button
                onClick={() => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-accent transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
        </div>
    );
}
