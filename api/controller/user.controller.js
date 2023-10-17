import express from "express";

const test = (req, res) => {
  res.json({ message: "my first API is working" });
};

export default test;
