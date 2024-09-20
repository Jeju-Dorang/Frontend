type diaryStatus = Private|Public;

export interface Diary {
    title: string;
    content: string;
    status: diaryStatus;
}