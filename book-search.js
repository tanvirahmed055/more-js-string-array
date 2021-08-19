//৮. একটা array এর মধ্যে অনেকগুলা ইংরেজি জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম (স্ট্রিং) আছে। জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম না জানলে, গুগলে সার্চ দিয়ে বের করো। তারপর একটা লুপ চালিয়ে দেখো কোন কোন বইয়ের নামের মধ্যে "javascript" আছে। তাহলে সেই বইগুলার নাম আরেকটা array এর মধ্যে রাখবে। আর হ্যাঁ, যখন javascript আছে কিনা চেক করবে তখন খেয়াল করবে বড়হাতের নাকি ছোট হাতের অক্ষর সেটা বাদ দিয়ে চেক করতে। অর্থাৎ কেইস ইনসেন্সিটিভ হবে।


const javascriptBooks = ["Eloquent JavaScript: A Modern Introduction to Programming", "JavaScript: The Good Parts", "Learn JavaScript VISUALLY", "High-Performance Browser Networking", "JavaScript: The Definitive Guide", "Composing Software"];

const booksWithJavascriptName = [];

const search = "javascript";

for (const book of javascriptBooks) {
    if (book.toLowerCase().includes(search.toLowerCase())) {
        booksWithJavascriptName.push(book);
    }
}

console.log(booksWithJavascriptName);