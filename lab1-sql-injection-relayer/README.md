# Lab 1: SQL Injection in a Web3 Relayer

## Overview
This lab demonstrates how a poorly implemented Web3 relayer can be vulnerable to SQL Injection. The goal is to understand the importance of sanitizing user input when interacting with databases — even in blockchain-integrated apps.

## Learning Objectives
- Understand how SQL injection can occur in hybrid Web2/Web3 environments.
- Learn how relayers act as a bridge and where they can be weak.
- Explore mitigation strategies.

## Prerequisites
- Basic knowledge of JavaScript, Express.js, and SQL.
- Familiarity with Web3 relayers and wallet signing.

## Tools
- Node.js
- Express
- SQLite3 or PostgreSQL (we’ll use SQLite for simplicity)
- Web3.js or Ethers.js (for simulating wallet signing)

## Setup
We’ll split this into:
- `backend/`: Node.js + SQLite + vulnerable relayer logic
- `frontend/`: Simple UI to simulate user input and wallet interaction

---
