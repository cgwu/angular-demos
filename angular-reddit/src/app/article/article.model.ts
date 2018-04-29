
export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes += 1;
    }
    voteDown() {
        this.votes -= 1;
    }

    // http://foo.com/path/to/bar => foo.com
    domain(): string {
        try {
            const domainAndPath: string = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}

//  测试语法
export class ArticleEx extends Article {
    constructor(obj?: any) {
        let title = obj && obj.title || 'empty title';
        let link = obj && obj.link || 'empty link';
        super(title, link);
    }
}
