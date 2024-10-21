/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

interface NotificationType {
  id: number;
  text: string;
}

interface NotificationProps {
  text: string;
  id: number;
  removeNotif: (id: number) => void;
}

const SlideInNotifications: React.FC = () => {
  const notificationsList = [
    "How are you?",
    `Today is ${new Date().toLocaleDateString()}`,
    "Have a nice day!",
  ];

  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [displayedIndexes, setDisplayedIndexes] = useState<number[]>([]);

  const removeNotif = (id: number) => {
    setNotifications((pv) => pv.filter((n) => n.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = displayedIndexes.length;
      if (nextIndex < notificationsList.length) {
        const newNotification: NotificationType = {
          id: Math.random(), 
          text: notificationsList[nextIndex],
        };
        setNotifications((pv) => [newNotification, ...pv]);
        setDisplayedIndexes((prev) => [...prev, nextIndex]);
      }
    }, 3000); 

    return () => clearInterval(interval); 
  }, [displayedIndexes]);

  return (
    <div className="flex items-center justify-center fixed">
      <div className="flex flex-col gap-2 w-72 fixed bottom-2 right-2 z-50 pointer-events-none">
        <AnimatePresence>
          {notifications.map((n) => (
            <Notification removeNotif={removeNotif} {...n} key={n.id} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const NOTIFICATION_TTL = 3000;

const Notification: React.FC<NotificationProps> = ({ text, id, removeNotif }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="p-3 flex items-start rounded-md gap-2 text-lg font-medium shadow-lg text-white bg-black pointer-events-auto uppercase"
    >
      <span>{text}</span>
      <button onClick={() => removeNotif(id)} className="ml-auto mt-0.5">
        <FiX />
      </button>
    </motion.div>
  );
};

export default SlideInNotifications;
