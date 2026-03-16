export default function About() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-4xl">
        <div className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          About
        </div>

        <div className="text-slate-900 dark:text-white leading-relaxed space-y-8">
          <p className="text-lg">
            <span className="font-semibold text-slate-900 dark:text-white">1B Computer Science student</span> at the University
            of Waterloo with a strong interest in{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">software engineering</span>,{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">systems design</span>, and building efficient,
            well-structured software. I enjoy breaking down complex problems, understanding how systems work internally, and translating
            those ideas into clean, reliable code.
          </p>

          <p className="text-lg">
            Through my coursework and independent projects, I have been developing a strong foundation in core CS topics such as{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">algorithms</span>,{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">data structures</span>, and{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">software design</span>. I regularly work with languages such as{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">Python</span>,{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">Java</span>, and{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">C/C++</span>. I'm particularly interested in{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">backend systems</span>,{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">developer tooling</span>, and the engineering practices
            that make software robust, maintainable, and performant.
          </p>

          <p className="text-lg">
            In addition to my coursework, I have also contributed to a research project and authored a paper —{' '}
            <em className="text-pink-600 dark:text-pink-300">
              Evaluating Large Language Models’ Susceptibility to Human Cognitive Biases
            </em>{' '}
            — which strengthened my experience in analytical thinking, technical writing, and exploring problems from a deeper theoretical
            perspective. Working on research taught me how to investigate complex topics methodically, communicate technical ideas clearly,
            and approach problems with both creativity and rigor.
          </p>

          <p className="text-lg">
            As I prepare for my first co-op term, I am excited to apply my technical foundation in a professional engineering environment.
            I'm eager to learn from experienced developers, contribute to meaningful projects, and gain hands-on experience building real-world
            systems. I thrive in collaborative environments where curiosity, thoughtful problem-solving, and continuous improvement are valued.
          </p>

          <p className="text-lg">
            Outside of computer science, I am also a <span className="font-semibold text-pink-600 dark:text-pink-300">violin player</span>.
            Music has taught me discipline, patience, and attention to detail — qualities that carry over naturally into software development.
            Just like refining a musical performance, I enjoy iterating on code, improving structure and clarity, and working toward elegant solutions.
          </p>

          <p className="text-lg">
            Ultimately, I’m passionate about building impactful software, growing as an engineer, and working on challenging technical problems.
            I’m currently seeking{' '}
            <span className="font-semibold text-pink-600 dark:text-pink-300">
              Software Engineering / Software Developer co-op opportunities
            </span>{' '}
            where I can contribute, learn quickly, and continue developing as a computer scientist.
          </p>
        </div>
      </div>
    </section>
  );
}
