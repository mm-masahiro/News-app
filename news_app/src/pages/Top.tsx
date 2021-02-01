import React from 'react';
import ArticleCard from '../components/ArticleCard';
// import NewsColumn from '../components/NewsColumn';
import '../styles/top_page.css'

function Top() {
	return (
		<div className="top">
			<h1>News Page</h1>
			<div className="top--colum">
				<ul className="top--colum__list">
					<li className="top--colum__list-contents">ニュース</li>
					<li className="top--colum__list-contents">マーケット情報</li>
				</ul>
			</div>
			<div className="top--contents">
				<ArticleCard />
			</div>
		</div>
	)
}

export default Top;
