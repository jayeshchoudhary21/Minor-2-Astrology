 

import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';
import './Calendar.css';

interface Event {
    title: string;
    time: string;
}

interface CalendarEvent {
    day: number;
    month: number;
    year: number;
    events: Event[];
}

const Calendar: React.FC = () => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventTimeFrom, setEventTimeFrom] = useState('');
    const [eventTimeTo, setEventTimeTo] = useState('');
    const [today] = useState<Date>(new Date());
    const [activeDay, setActiveDay] = useState<number>(today.getDate());
    const [month, setMonth] = useState<number>(today.getMonth());
    const [year, setYear] = useState<number>(today.getFullYear());
    const [eventsArr, setEventsArr] = useState<CalendarEvent[]>([]);
    const [showEventModal, setShowEventModal] = useState<boolean>(false);
    const [daysElements, setDaysElements] = useState<JSX.Element[]>([]);

    const eventDayRef = useRef<HTMLDivElement>(null);
    const eventDateRef = useRef<HTMLDivElement>(null);
    const eventsContainerRef = useRef<HTMLDivElement>(null);
    const daysContainerRef = useRef<HTMLDivElement>(null);
    const dateInputRef = useRef<HTMLInputElement>(null);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    useEffect(() => {
        getEvents();
    }, []);

    useEffect(() => {
        initCalendar();
        updateEvents(activeDay);
    }, [month, year, eventsArr]);

    const getEvents = () => {
        const savedEvents = localStorage.getItem('events');
        if (savedEvents) {
            setEventsArr(JSON.parse(savedEvents));
        }
    };

    const saveEvents = () => {
        localStorage.setItem('events', JSON.stringify(eventsArr));
    };

    const initCalendar = () => {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const prevLastDay = new Date(year, month, 0);
        const prevDays = prevLastDay.getDate();
        const lastDate = lastDay.getDate();
        const day = firstDay.getDay();
        const nextDays = 7 - lastDay.getDay() - 1;

        const days: JSX.Element[] = [];

        for (let x = day; x > 0; x--) {
            days.push(
                <div key={`prev-${x}`} className="day prev-date">
                    {prevDays - x + 1}
                </div>
            );
        }

        for (let i = 1; i <= lastDate; i++) {
            const hasEvent = eventsArr.some(
                event => event.day === i && event.month === month + 1 && event.year === year
            );

            const isToday =
                i === today.getDate() &&
                year === today.getFullYear() &&
                month === today.getMonth();

            if (isToday) {
                setActiveDay(i);
                getActiveDay(i);
                days.push(
                    <div
                        key={`day-${i}`}
                        className={`day ${hasEvent ? 'event' : ''} today active`}
                        onClick={() => handleDayClick(i)}
                    >
                        {i}
                        {hasEvent && <div className="event-indicator"></div>}
                    </div>
                );
            } else {
                days.push(
                    <div
                        key={`day-${i}`}
                        className={`day ${hasEvent ? 'event' : ''}`}
                        onClick={() => handleDayClick(i)}
                    >
                        {i}
                        {hasEvent && <div className="event-indicator"></div>}
                    </div>
                );
            }
        }

        for (let j = 1; j <= nextDays; j++) {
            days.push(
                <div
                    key={`next-${j}`}
                    className="day next-date"
                    onClick={() => handleDayClick(j, true)}
                >
                    {j}
                </div>
            );
        }

        setDaysElements(days);
    };

    const handleDayClick = (dayNumber: number, isNextDate = false) => {
        if (isNextDate) {
            nextMonth();
            setTimeout(() => {
                setActiveDay(dayNumber);
                getActiveDay(dayNumber);
                updateEvents(dayNumber);
            }, 0);
        } else {
            setActiveDay(dayNumber);
            getActiveDay(dayNumber);
            updateEvents(dayNumber);
        }
    };

    const prevMonth = () => {
        setMonth(prev => {
            if (prev === 0) {
                setYear(year - 1);
                return 11;
            }
            return prev - 1;
        });
    };

    const nextMonth = () => {
        setMonth(prev => {
            if (prev === 11) {
                setYear(year + 1);
                return 0;
            }
            return prev + 1;
        });
    };

    const goToToday = () => {
        const newToday = new Date();
        setMonth(newToday.getMonth());
        setYear(newToday.getFullYear());
        setActiveDay(newToday.getDate());
    };

    const gotoDate = () => {
        if (!dateInputRef.current) return;

        const dateArr = dateInputRef.current.value.split('/');
        if (dateArr.length === 2) {
            const monthInput = Number(dateArr[0]);
            const yearInput = Number(dateArr[1]);
            if (monthInput > 0 && monthInput < 13 && dateArr[1].length === 4) {
                setMonth(monthInput - 1);
                setYear(yearInput);
                return;
            }
        }
        alert('Invalid Date');
    };

    const getActiveDay = (date: number) => {
        const day = new Date(year, month, date);
        const dayName = day.toString().split(' ')[0];

        if (eventDayRef.current) eventDayRef.current.textContent = dayName;
        if (eventDateRef.current) {
            eventDateRef.current.textContent = `${date} ${months[month]} ${year}`;
        }
    };

    const updateEvents = (date: number) => {
        if (!eventsContainerRef.current) return;

        const eventsForDay = eventsArr.find(
            event => event.day === date &&
                event.month === month + 1 &&
                event.year === year
        );

        if (eventsForDay && eventsForDay.events.length > 0) {
            eventsContainerRef.current.innerHTML = eventsForDay.events.map(ev => `
                <div class="event">
                    <div class="title">
                        <i class="fas fa-circle"></i>
                        <h3 class="event-title">${ev.title}</h3>
                    </div>
                    <div class="event-time">
                        <span class="event-time">${ev.time}</span>
                    </div>
                </div>
            `).join('');
        } else {
            eventsContainerRef.current.innerHTML = `
                <div class="no-event">
                    <h3>No Events</h3>
                </div>
            `;
        }
    };

    const convertTime = (time24: string) => {
        if (!time24.includes(':')) return time24;

        const [hours, minutes] = time24.split(':').map(Number);
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
    };

    const addEvent = () => {
        if (!eventTitle || !eventTimeFrom || !eventTimeTo) {
            alert('Please fill all the fields');
            return;
        }

        const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(eventTimeFrom) || !timeRegex.test(eventTimeTo)) {
            alert('Please enter time in HH:MM format (24-hour)');
            return;
        }

        const eventTimeString = `${convertTime(eventTimeFrom)} - ${convertTime(eventTimeTo)}`;

        const isDuplicate = eventsArr.some(event =>
            event.day === activeDay &&
            event.month === month + 1 &&
            event.year === year &&
            event.events.some(ev =>
                ev.title === eventTitle &&
                ev.time === eventTimeString
            )
        );

        if (isDuplicate) {
            alert('This event already exists');
            return;
        }

        const newEvent = {
            title: eventTitle,
            time: eventTimeString
        };

        const updatedEvents = [...eventsArr];
        const existingDateIndex = updatedEvents.findIndex(
            event => event.day === activeDay &&
                event.month === month + 1 &&
                event.year === year
        );

        if (existingDateIndex !== -1) {
            updatedEvents[existingDateIndex] = {
                ...updatedEvents[existingDateIndex],
                events: [...updatedEvents[existingDateIndex].events, newEvent]
            };
        } else {
            updatedEvents.push({
                day: activeDay,
                month: month + 1,
                year: year,
                events: [newEvent]
            });
        }

        setEventsArr(updatedEvents);
        saveEvents();
        setShowEventModal(false);

        setEventTitle('');
        setEventTimeFrom('');
        setEventTimeTo('');

        updateEvents(activeDay);
        initCalendar();
    };

    return (
        <div className='mt-[68px]   pt-[18px]'>
            <div className="container1 w-[80vw] h-[70vh]">
                <div className="left">
                    <div className="calendar1 bg-[#0f121d]">
                        <div className="month">
                            <button className="prev" onClick={prevMonth}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                            <div className="date">{months[month]} {year}</div>
                            <button className="next" onClick={nextMonth}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>
                        <div className="weekdays">
                            <div>Sun</div>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                        </div>
                        <div className="days" ref={daysContainerRef}>
                            {daysElements}
                        </div>
                        <div className="goto-today">
                            <div className="goto">
                                <input
                                    type="text"
                                    placeholder="mm/yyyy"
                                    className="date-input"
                                    ref={dateInputRef}
                                    onChange={(e) => {
                                        let value = e.target.value.replace(/[^0-9/]/g, '');
                                        if (value.length === 2 && !value.includes('/')) {
                                            value += '/';
                                        }
                                        e.target.value = value.slice(0, 7);
                                    }}
                                />
                                <button className="goto-btn" onClick={gotoDate}>Go</button>
                            </div>
                            <button className="today-btn" onClick={goToToday}>Today</button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="today-date">
                        <div className="event-day" ref={eventDayRef}>
                            {new Date(year, month, activeDay).toString().split(' ')[0]}
                        </div>
                        <div className="event-date" ref={eventDateRef}>
                            {activeDay} {months[month]} {year}
                        </div>
                    </div>
                    <div
                        className="events"
                        ref={eventsContainerRef}
                    ></div>
                    <button
                        className="add-event"
                        onClick={() => setShowEventModal(true)}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

                {showEventModal && (
                    <div className="modal-overlay" onClick={() => setShowEventModal(false)}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <div className="modal-header">
                                <h3>Add New Event</h3>
                                <button onClick={() => setShowEventModal(false)}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="add-event-input">
                                    <input
                                        type="text"
                                        placeholder="Event Name"
                                        value={eventTitle}
                                        onChange={(e) => setEventTitle(e.target.value)}
                                        autoFocus
                                    />
                                </div>
                                <div className="add-event-input">
                                    <input
                                        type="text"
                                        placeholder="From (HH:MM)"
                                        value={eventTimeFrom}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/[^0-9]/g, '');
                                            if (value.length > 2) {
                                                value = `${value.slice(0, 2)}:${value.slice(2)}`;
                                            }
                                            setEventTimeFrom(value.slice(0, 5));
                                        }}
                                    />
                                </div>
                                <div className="add-event-input">
                                    <input
                                        type="text"
                                        placeholder="To (HH:MM)"
                                        value={eventTimeTo}
                                        onChange={(e) => {
                                            let value = e.target.value.replace(/[^0-9]/g, '');
                                            if (value.length > 2) {
                                                value = `${value.slice(0, 2)}:${value.slice(2)}`;
                                            }
                                            setEventTimeTo(value.slice(0, 5));
                                        }}
                                    />
                                </div>
                                <button
                                    className="add-event-btn"
                                    onClick={addEvent}
                                >
                                    Add Event
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calendar;
 