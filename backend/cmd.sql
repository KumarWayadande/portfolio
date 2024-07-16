CREATE TABLE articles(
    id VARCHAR(50),
    articleDate DATE,
    articleHeading VARCHAR(50),
    article LONGTEXT
);

INSERT INTO articles VALUES ("ARTICLE_01", "2024-07-16", "Crafting a design system for a multiplanetary future", "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.");