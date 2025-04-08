import React, { useState } from "react";
import { View } from "@tarojs/components";
import {
  AtForm,
  AtInput,
  AtTextarea,
  AtButton,
  AtList,
  AtListItem,
} from "taro-ui";
import "./index.scss";

const Note = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const handleSubmit = () => {
    if (!title || !content) return;
    const newNote = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  return (
    <View className="note">
      <AtForm onSubmit={handleSubmit}>
        <AtInput
          name="title"
          title="标题"
          type="text"
          placeholder="请输入笔记标题"
          value={title}
          onChange={(value) => setTitle(value)}
        />
        <AtTextarea
          value={content}
          onChange={(value) => setContent(value)}
          maxLength={200}
          placeholder="请输入笔记内容"
        />
        <AtButton type="primary" formType="submit">
          保存笔记
        </AtButton>
      </AtForm>

      <View className="notes-list">
        <AtList>
          {notes.map((note) => (
            <AtListItem
              key={note.id}
              title={note.title}
              note={note.content}
              extraText={note.date}
            />
          ))}
        </AtList>
      </View>
    </View>
  );
};

export default Note;
