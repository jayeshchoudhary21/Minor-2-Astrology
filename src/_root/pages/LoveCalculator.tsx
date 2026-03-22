 
 




import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface HistoryItem {
  boy: string;
  girl: string;
  love: number;
}

function LoveCalculator() {
  const [boyName, setBoyName] = useState<string>('');
  const [girlName, setGirlName] = useState<string>('');
  const [percentage, setPercentage] = useState<number | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHearts, setShowHearts] = useState(false);

  const boyProfile = 'https://cdn-icons-png.flaticon.com/512/1998/1998671.png';
  const girlProfile = 'https://cdn-icons-png.flaticon.com/512/3048/3048122.png';

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('loveHistory') || '[]') as HistoryItem[];
    setHistory(savedHistory);
  }, []);

  useEffect(() => {
    if (showHearts) {
      const timer = setTimeout(() => setShowHearts(false), 4000); // hearts disappear after 4 seconds
      return () => clearTimeout(timer);
    }
  }, [showHearts]);

  const handleCheck = () => {
    if (!boyName || !girlName) {
      alert('Please enter both names!');
      return;
    }

    if (confirm('Are you sure you want to find love percentage?')) {
      const existingEntry = history.find(
        (entry) =>
          entry.boy.toLowerCase().trim() === boyName.toLowerCase().trim() &&
          entry.girl.toLowerCase().trim() === girlName.toLowerCase().trim()
      );

      if (existingEntry) {
        setPercentage(existingEntry.love);
        setShowHearts(true);
      } else {
        const randomPercentage = Math.floor(Math.random() * 51) + 50; // 50-100%
        setPercentage(randomPercentage);
        const newEntry = { boy: boyName.trim(), girl: girlName.trim(), love: randomPercentage };
        const updatedHistory = [...history, newEntry];
        setHistory(updatedHistory);
        localStorage.setItem('loveHistory', JSON.stringify(updatedHistory));
        setShowHearts(true);
      }
    }
  };

  const deleteHistory = () => {
    if (confirm('Are you sure you want to delete all history?')) {
      setHistory([]);
      localStorage.removeItem('loveHistory');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#131d41] via-[#1d1425] to-[#08052e] p-4 relative overflow-hidden">

      {/* Heart explosion overlay */}
      {showHearts && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -window.innerHeight }}
              transition={{
                duration: Math.random() * 2 + 2,
                delay: Math.random() * 1,
              }}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                color: 'hotpink',
              }}
            >
              <span className='text-[50px]'>❤️🤩 </span>  
            </motion.div>
          ))}
           
        </div>
      )}

      <Card className="w-full max-w-[65rem] p-6 rounded-2xl shadow-2xl bg-[#242c43] z-10">
        <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">Love Compatilibilty❤️</h1>
        <CardContent className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Boy's Name"
            className="border-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={boyName}
            onChange={(e) => setBoyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Girl's Name"
            className="border-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={girlName}
            onChange={(e) => setGirlName(e.target.value)}
          />
          <Button type='submit'
            onClick={handleCheck}
            className="bg-pink-500 text-[1.5rem] hover:bg-pink-600 text-white font-bold py-2 rounded-xl transition-all"
          >
            Check Result
          </Button>

          {percentage !== null && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-center mt-6 flex flex-col items-center"
            >
              <div className="flex items-center gap-4">
                <img src={boyProfile} alt="Boy" className="w-16 h-16 rounded-full border-2 border-pink-400" />
                <img src={girlProfile} alt="Girl" className="w-16 h-16 rounded-full border-2 border-pink-400" />
              </div>
              <h2 className="text-2xl font-semibold text-purple-600 mt-4">
                {boyName} ❤️ {girlName} = {percentage}% Love
              </h2>
            </motion.div>
          )}

          {history.length > 0 && (
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-indigo-600">Previous Results:</h3>
                <Button  
                  onClick={deleteHistory}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg"
                >
                  Delete All
                </Button>
              </div>
              <div className="mt-4 space-y-2 max-h-48 overflow-y-auto">
                {history.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-2 bg-pink-100 rounded-xl shadow flex items-center gap-4"
                  >
                    <img src={boyProfile} alt="Boy" className="w-10 h-10 rounded-full border" />
                    <img src={girlProfile} alt="Girl" className="w-10 h-10 rounded-full border" />
                    <p className="text-center font-medium">
                      {item.boy} ❤️ {item.girl} = {item.love}%
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default LoveCalculator;
