import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Target, Lightbulb } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transforming Brands Since 1985
            </h2>
            <p className="text-xl text-blue-600 mb-8">
              Four decades of strategic brand management and market leadership.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Cooper Management LLC has established itself as a cornerstone in brand management 
              and business advisory services. Our expertise in managing manufacturing brands, 
              coupled with deep market insights, has helped transform innovative products into 
              industry-leading solutions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-bold text-blue-600 mb-2">40+</h4>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-blue-600 mb-2">3+</h4>
                <p className="text-gray-600">Global Brands</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
              alt="Strategic Management Excellence"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-2xl -z-10"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Target}
            title="Strategic Vision"
            description="Expert guidance in brand positioning, market strategy, and business growth opportunities."
          />
          <FeatureCard
            icon={Lightbulb}
            title="Innovation Management"
            description="Transforming manufacturing excellence into market-leading brand success through innovative management."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Growth Acceleration"
            description="Proven strategies for market expansion, brand development, and sustainable business growth."
          />
        </div>
      </div>
    </section>
  );
};

export default About;