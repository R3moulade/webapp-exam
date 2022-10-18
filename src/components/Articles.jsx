import { collection, orderBy, query } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import { db } from '../firebaseConfig';

export default function Articles() {
    const [articles, setArticles] = useState([]);
    useEffect(()=> {
        const articleRef = collection(db, "Articles");
        const q = query(articleRef, orderBy("createdAt", "desc"));
    });
  return (
    <div>
        {
        articles.length === 0 ? (
            <p>No articles found!</p>
        ):(
            articles.map((article)=> (
            <div className="border mt-3 p-3 bg-light">div</div>
            ))
        )}
    </div>
  )
}
