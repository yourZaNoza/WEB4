import React from "react";

const PostCard = ({ post }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{post.title}</h3>
      <p style={styles.content}>{post.content}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#dcd6f7",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "1rem",
    flexBasis: "calc(50% - 1rem)",
    boxSizing: "border-box",
  },
  title: {
    color: "#4a3b7e",
    marginBottom: "0.5rem",
    fontSize: "1.2rem",
  },
  content: {
    color: "#333",
    fontSize: "0.9rem",
    lineHeight: "1.5",
  },
};

export default PostCard;
