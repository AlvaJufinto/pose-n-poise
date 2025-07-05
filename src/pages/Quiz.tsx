/** @format */

import { useState } from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import {
  questions,
  results,
} from '../data';
import { getPersonalityResult } from '../gemini';
import Wrapper from '../partials/Wrapper';

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<Number | null>();
  const [loading, setLoading] = useState(false);

  const current = questions[step];

  const handleClick = async (choiceText: string) => {
    const newAnswers = [...answers, choiceText];

    if (step === questions.length - 1) {
      setLoading(true);
      try {
        const res = await getPersonalityResult(newAnswers);
        setResult(res);
      } catch (err) {
        setResult(null);
      }
      setLoading(false);
    } else {
      setAnswers(newAnswers);
      setStep(step + 1);
    }
  };

  if (loading) {
    return (
      <Wrapper>
        <div className="flex justify-center items-center h-[60vh] text-2xl font-primary">
          Loading your result...
        </div>
      </Wrapper>
    );
  }

  if (result !== undefined) {
    const finalResult = results.find((res) => res.id == result);

    return (
      <Wrapper>
        <AnimatePresence mode="wait">
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-10"
          >
            <h1 className="text-2xl text-gold font-secondary">Pose & Poise</h1>
            <h1 className="font-primary text-4xl">"You are the..."</h1>
            {finalResult?.img && (
              <img
                src={finalResult.img}
                alt={finalResult.title}
                className="h-100 object-cover"
              />
            )}
            <h1 className="font-primary text-4xl">{finalResult?.title}</h1>
            <p className="text-center font-primary text-2xl w-3/4">
              {finalResult?.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-5"
        >
          <h1 className="text-2xl text-gold font-secondary">Pose & Poise</h1>
          <h1 className="font-primary text-xl text-center w-3/4">
            {current.top}
          </h1>
          <h1 className="font-primary text-xl text-center w-3/4">
            {current.question}
          </h1>
          <div className="grid grid-cols-2 gap-8">
            {current.choices.map((choice, id) => (
              <div
                key={id}
                onClick={() => handleClick(choice.text)}
                className="flex flex-col justify-start items-center cursor-pointer hover:opacity-80 transition-all"
              >
                <img
                  src={choice.img}
                  className="h-52 object-cover"
                  alt={choice.text}
                />
                <h1 className="font-tertiary text-3xl text-center mt-4">
                  {choice.text}
                </h1>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
}
