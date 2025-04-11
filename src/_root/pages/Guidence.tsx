import React, { useState, ChangeEvent, FormEvent , ReactNode} from 'react';
import { CSSProperties } from 'react';

const AstrologyInsights = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    day: '',
    month: '',
    year: ''
  });
  const [result, setResult] = useState<ReactNode>('');

  const zodiacSigns = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
  ];

  const compliments = [
    "You have a great sense of humor.",
    "Your smile lights up the room.",
    "You bring out the best in people.",
    "You're an incredibly thoughtful person.",
    "You have a heart of gold.",
    "Your creativity is inspiring.",
    "You're a fantastic problem-solver.",
    "Your kindness is contagious.",
    "You have an amazing ability to connect with others.",
    "You're so knowledgeable about so many things.",
    "Your determination is admirable.",
    "You're a great listener.",
    "You make the world a better place.",
    "Your positivity is infectious.",
    "You have an eye for detail.",
    "You're always so helpful and considerate.",
    "You have a natural talent for leadership.",
    "Your courage is inspiring.",
    "You're an amazing friend.",
    "You have a unique perspective that is refreshing.",
    "Your energy brightens everyone's day.",
    "You're incredibly resourceful.",
    "You have a wonderful way with words.",
    "You're a ray of sunshine on a cloudy day.",
    "Your hard work is paying off.",
    "You're so reliable and trustworthy.",
    "You have a fantastic sense of style.",
    "Your confidence is inspiring.",
    "You're a great mentor and teacher.",
    "Your dedication is remarkable.",
    "You make everyone feel valued and respected."
  ];

  const victimCardCompliments = [
    "You always do good for others, but they don't appreciate it.",
    "You give so much, but rarely get anything in return.",
    "Your kindness often goes unnoticed, but it's truly remarkable.",
    "You always put others first, even when they don't deserve it.",
    "You sacrifice so much, yet people rarely acknowledge it.",
    "You have a heart of gold, but others take it for granted.",
    "You're always there for everyone, but they're not always there for you.",
    "You work so hard, yet your efforts often go unrecognized.",
    "You care deeply, even when others don't reciprocate.",
    "You forgive so easily, even when people don't deserve it.",
    "You give people the benefit of the doubt, but they rarely do the same for you.",
    "You stand by people in their tough times, but they forget you in yours.",
    "You always try to make peace, even when others blame you.",
    "You handle so much pressure, yet no one sees your struggles.",
    "You give so much love, but people don't value it enough.",
    "You're always honest, yet people misunderstand your intentions.",
    "You go out of your way for others, but they don't return the favor.",
    "You share everything you have, but people still ask for more.",
    "You're a true friend, even when others don't treat you the same.",
    "You keep helping others, even when they don't say thank you."
  ];

  const recommendations = [
    "Feed a street dog and spread kindness.",
    "Plant a tree and nurture it.",
    "Volunteer at a local shelter or community center.",
    "Start your day with meditation for a peaceful mind.",
    "Write down three things you're grateful for daily.",
    "Spend time with your family and cherish those moments.",
    "Help someone in need, even in small ways.",
    "Read a book that inspires you to grow.",
    "Exercise regularly to keep your body healthy.",
    "Donate clothes you don't wear to charity.",
    "Cook a meal for someone and share the joy of food.",
    "Smile at strangers and brighten their day.",
    "Learn a new skill or hobby that excites you.",
    "Reduce your plastic use to help the environment.",
    "Disconnect from social media for a day and enjoy the moment.",
    "Start a journal to document your thoughts and dreams.",
    "Spend time in nature and appreciate its beauty.",
    "Compliment someone genuinely and make their day.",
    "Clean your room or workspace to feel more organized.",
    "Drink more water and prioritize your health.",
    "Write a letter to your future self.",
    "Support a local business or artisan.",
    "Listen to someone without interrupting.",
    "Practice random acts of kindness every day.",
    "Save a small amount of money weekly for future goals.",
    "Make a vision board to stay motivated.",
    "Adopt an eco-friendly habit like cycling or walking more.",
    "Spend time with children and learn from their innocence.",
    "Call an old friend and reconnect.",
    "Learn to say no to things that don't serve your happiness."
  ];

  const predictions = [
    "You will become a crorepati!",
    "Success is just around the corner for you.",
    "Your dream job is closer than you think.",
    "Expect the unexpected—great things are coming.",
    "You will travel the world in the next few years.",
    "A big opportunity will knock on your door soon.",
    "Your hard work will pay off in ways you can't imagine.",
    "You will make a difference in someone's life.",
    "A surprising adventure is coming your way.",
    "Great things come to those who wait—your time is coming.",
    "Your creativity will lead to great success.",
    "A life-changing moment is just ahead.",
    "Get ready for some exciting news soon.",
    "A financial breakthrough is in your future.",
    "You will find happiness in the smallest things.",
    "Your patience will lead to big rewards.",
    "A new friendship will change your life.",
    "Prepare for a future full of opportunities.",
    "A career breakthrough is on the horizon.",
    "You will leave a legacy of inspiration."
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, surname, day, month, year } = formData;
    const dayNum = Number(day);
    const monthNum = Number(month);
    const yearNum = Number(year);

    // const first_message = `Hello ${name} ${surname}.`;
    const first_message = `🌞 Hello ${name} ${surname}, born on ${day}/${month}/${year}.             `;

    const second_message = `🔮 Your Zodiac sign is ${zodiacSigns[monthNum - 1]}.`;
    const third_message = ` 💖 Compliment of the day: ${compliments[dayNum - 1]}`;

    let index = Math.floor(Math.random() * 20);
    const fourth_message =`🧙‍♂️ Your 'Victim Card' strength level is ${victimCardCompliments[index]}`;

    index = (name.length * surname.length * yearNum) % 30;
    const fifth_message =`📌 We Recommend: ${recommendations[index]}` ;

    index = (dayNum * monthNum * yearNum) % 20;
    const sixth_message = `✨ Future Insight: ${ predictions[index]}`;

    // setResult(`${<h1>{first_message}</h1>} ${second_message} ${third_message} ${fourth_message} Our Recommendation for you: ${fifth_message} Your Future Prediction is: ${sixth_message}`);
 
    setResult(
      <div className="space-y-4 text-white m-2">
        <h1 className="text-[19px] font-bold text-purple-400">{first_message}</h1>
        <p className="font-semibold text-[16px]  ">{second_message}</p>
        <p className="font-semibold text-[16px]  ">{third_message}</p>
        <p className="font-semibold text-[16px]  ">{fourth_message}</p>
        <p className="font-semibold text-[16px] text-pink-300">
          🔮 Our Recommendation for you: <span className="text-white">{fifth_message}</span>
        </p>
        <p className="font-semibold text-[16px] text-yellow-300">
          🌟 Your Future Prediction is: <span className="text-white">{sixth_message}</span>
        </p>
      </div>
    );
    
  };

  return (
    <div style={styles.body} className='mt-9'>
      <div style={styles.container}>
        <h1 style={styles.heading} >Astrology Insights</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label className="  small-medium md:base-regular mt-12" style={styles.label} htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label} htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label} htmlFor="day">Date of Birth (Day):</label>
          <input
            type="number"
            id="day"
            name="day"
            min="1"
            max="31"
            value={formData.day}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label} htmlFor="month">Month:</label>
          <input
            type="number"
            id="month"
            name="month"
            min="1"
            max="12"
            value={formData.month}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label} htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            name="year"
            min="1900"
            max="2023"
            value={formData.year}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input type="submit" value="Get Insights" style={styles.submitButton} />
        </form>
         
        {result && (
          <div className=" mt-8 p-6 bg-gradient-to-br from-purple-800 via-indigo-900 to-black rounded-2xl shadow-2xl border border-purple-500 text-white space-y-4 animate-fade-in transition-all duration-700">
            {result}
          </div>
        )}

      </div>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: '40px',
    padding: 0,

    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '90%',
    maxWidth: '600px',
    background: "#796a7b47",
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  heading: {
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '20px',
    color: 'rgb(120 120 163 / var(--tw-text-opacity))'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#cea5e2'
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #d1d5db'
  },
  submitButton: {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '10px'
  },
  result: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#e0f2fe',
    borderRadius: '8px',
    color: '#0c4a6e'
  },
  backButton: {
    display: 'inline-block',
    marginTop: '15px',
    color: '#3b82f6',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default AstrologyInsights;
