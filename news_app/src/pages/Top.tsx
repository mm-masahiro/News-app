import React from 'react';
import NewsColumn from '../components/NewsColumn';
import '../styles/top_page.css'

function Top() {
	return (
		<div className="Top">
			<h1>News Page</h1>
			<div className="Top--colum">
				<ul className="Top--colum__list">
					<li className="Top--colum__list-contents">ニュース</li>
					<li className="Top--colum__list-contents">マーケット情報</li>
				</ul>
			</div>
			<div>
				<NewsColumn />
			</div>
		</div>
	)
}

export default Top;
