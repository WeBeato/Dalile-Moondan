# Dalile Moondan 💙

Dalile Moondan is a message-sharing platform where people can send kind, supportive, and compassionate messages for those who need encouragement.  
All messages are reviewed by an admin before being published publicly.

---

## 🌱 Project Purpose

The goal of **Dalile Moondan** is to create a safe and positive space where:

- People can write **kind and uplifting messages**
- Messages reach individuals who need emotional support
- All content is **reviewed and moderated** before being published

---

## 🧠 How It Works

1. A user submits a message
2. The message is stored as a **pending message**
3. An admin reviews messages **one at a time**
4. The admin can:
   - ✅ **Approve** → message is published
   - ❌ **Reject** → message is deleted
5. After each action, the next pending message is shown automatically

---

## 🔐 Message Moderation System

- New messages are saved in the `pendingMessages` collection
- Approved messages are moved to the main `messages` collection
- Rejected messages are permanently removed
- Only one message is displayed at a time for focused moderation

---

## ⭐️ Saved Messages Feature

Users can **save messages** they find meaningful or helpful.

### How saved messages work:

- Saved messages are stored in the browser using **LocalStorage**
- Each saved message remains available even after:
  - Page reload
  - Browser restart
- Users can:
  - View all saved messages on a dedicated page
  - Remove saved messages individually
  - Confirm deletion before removing a saved message

This feature allows users to keep personal collections of messages that inspire or comfort them.

---

## 🛠 Tech Stack

- **React**
- **Firebase Firestore**
- **Framer Motion** (animations)
- **LocalStorage** (saved messages & admin session)
- **CSS** (custom styling)

---

## 🎯 Key Features

- Message submission form
- Admin moderation panel
- Approve / Reject workflow
- One-message-at-a-time review system
- Saved messages with persistence
- Confirmation modal for deletions
- Smooth UI animations

---

## 🤍 Philosophy

A single kind message can be a reason to keep going.  
**Dalile Moondan** exists to deliver those messages safely, thoughtfully, and with care.

---

## [Test Online](https://webeato.github.io/Dalile-Moondan/)
