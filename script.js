'use strict';


document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();
    const search = parseInt(document.getElementById('form').word.value);
    let i = 1;
    let search1;
    let search2;
    let search3;
    let search4;
    let search5;
    let search6;
    let search7;
    let search8;
    let search9;



    while (i <= search) {
        search1 = Math.floor(Math.random() * 24);
        search2 = Math.floor(Math.random() * 24);
        search3 = Math.floor(Math.random() * 24);
        search4 = Math.floor(Math.random() * 12);
        search5 = Math.floor(Math.random() * 21);
        search6 = Math.floor(Math.random() * 21);
        search7 = Math.floor(Math.random() * 17);
        search8 = Math.floor(Math.random() * 17);
        search9 = Math.floor(Math.random() * 17);
       
        i++;
    }

    let fukurofamous = ['五輪書', '論語' , '武士道' , '孫子' , ' 韓非子' , '菜根譚' , '風姿花伝' , '老子' , '呉子' , '荘子' , '貞観政要' , '' ];
    let ffr = fukurofamous[search4];

    let shikafamous = ['愛染恭子', '逢初夢子', '青木鶴子', '赤坂小梅', 'あき竹城', '麻丘めぐみ', '朝丘雪路', '浅丘ルリ子', '朝加真由美', '浅香光代', '浅田美代子', '朝比奈順子', '梓英子', '東龍子', '東屋トン子', 'あべ静江', '天地総子', '有馬稲子', '淡路恵子', '淡島千景', '天地真理'];
    let sfr = shikafamous[search5];

    let shikafamous2 = ['ダイナクロコvsスーパーゲイター', 'ダイナソーinL.A.', 'クラーケンフィールド/HAKAISHIN', 'ダイ・ハード2', 'メガ・シャークVSジャイアント・オクトパス', 'ピラニア3D', 'エイリアン vs.アバター', 'シャークネード', 'マンイーター', 'ディノシャーク', 'マンモス', 'ビーチ・シャーク', 'ヴァイキングダム', 'ツイスター2008', 'ボトム・プレデター 地底に潜む生命体', 'アイス・ツイスター', 'アポカリプス・ナウ', 'ビッグ・バグズ・パニック', 'ヒート・ストローク', 'トランスバトラー', '2048'];
    let sfr2 = shikafamous2[search6];
    
    let shikafamous3 = ['ドラえもん', '安倍元首相', 'しずかちゃん', '虎のじゅうたん', 'スネ夫', 'こなきじじい', 'ジョージ・クルーニー', 'カオナシ', 'バイデン大統領', 'twitterのロゴ', 'ムック', 'ねずみ男', 'マリオ', 'ピカチュウ', 'フリーザ', '波平', 'ねこバス', ];
    let sfr3 = shikafamous3[search7];
    
    let shikafamous4 = ['著作者、手術中', '赤巻き紙、青巻き紙、黄巻き紙', '坊主が上手に屏風に坊主の絵をかいた', '除雪車、除雪作業中', '隣の客はよく柿食う客だ', '赤パジャマ、黄パジャマ、青パジャマ', '生麦 生米 生卵', '東京特許許可局', '老若男女', '親切診察室視察', '肩固かったから買った肩たたき器', '骨粗鬆症訴訟勝訴', 'バナナの謎はまだ謎なのだぞ', '空虚な九州空港の究極高級航空機', 'マグマ大使のママはマママグマ大使', '庭には二羽鶏がいる', '信長どのも信長どのなら、ねねどのもねねどのじゃ', ];
    let sfr4 = shikafamous4[search8];
    
    let shikafamous5 = ['神の手を持つ外科医','世間話が上手い美容師', 'テキトーに弁護する弁護士', '潔癖症な検視官', 'カット失敗されて美容師に文句言う客', '信号無視で止められたけど逆ギレするドライバー', '1分で1億売るTV通販カリス実演販売士', 'ペンタゴンのデータにまで侵入する天才ハッカー', '財界からも信頼度の高いスーパー占い師', '台風の状況を外から報告するリポーター', '最近買ったコスメを紹介するカリスマYoutuber', 'しゃべれるようになったお嬢様猫', '庭から居住者をじっと見つめる木', '隣の隣の奥さんの噂話をしてくる隣の奥さん', '午後2時ごろから酔っぱらうおじさん', '来日して日本のファンに日本語で語りかけるハリウッドスター','無銭飲食の謝罪会見をする力士'];
    let sfr5 = shikafamous5[search8];
    
    let shikafamous6 = ['桜','寿', '凛と咲く', '龍', '秋の旅人', '流氷', '宇宙', '未来', '森は知っている', 'カサブランカ', '極み', '滝', '爆発', '怒り', '歓喜', '熱狂','古(いにしえ)'];
    let sfr6 = shikafamous6[search9];
    
    
    
let fukurosay = ['人生は短い。今一度、挑戦してみたいことを1つ紙に書いてくださらんか。',
                    '身近な方に感謝のメッセージを1つだけ紙に書いてくださるかのぅ。',
                     'そなたが今江戸時代に行ったとして、何をしてみたいかのぅ？',
                        '一度外に出て、「綺麗なもの」の写真を撮ってきてくださらんか。',
                     '住んでみたい国を教えてくだされ。その理由も教えてくださるかのぅ。',
                     'そなたが素敵だと思う方は、どんな方ですかな？紙に書いて教えてくだされ。',
                     '今、何と言ってほめられたら一番嬉しいですかな？紙に書いてくださらんか。',
                     'ほほう、目が疲れたですかな？植物の緑をしばらく見つめなされぃ。',
                     '将来実現したい事を2つ、紙に書いてくださるかな？',
                     'もし時間ができたらやりたいことをひとつ紙に書いてくださらんか。',
                     `『${ffr}』という書を読んだことはあるかね？今すぐkindleで購入し、読みはじめるのじゃ。`,
                     `そなたが${search5}歳の時に世の中で起こったできごとを調べてみてくださらんか。`,
                     '尊敬する人物はおられますかのぅ？その理由とともに紙に書いてくだされぃ。',
                     'そなたを今一番元気にしてくれる言葉を1つ、紙に書いてみてくだされぃ。',
                     '何でもいい、そなたが今までにやった事で誇りに思うことを教えてくださらんか。',
                     'この世界を少しだけ良くするためにそなたができることを1つ書いてくださるかのぅ。',
                     'やってみたい仕事を、ひとつ紙に書いてくださらんか。',
                     '理想の自分に近づくために、今から改善することを1つだけ宣言するのじゃ。',
                     'そなたの好きな言葉を、ひとつだけ教えてくださらんか。',
                     'そなた自身をほめるとすれば、何をほめるかのぅ？1つ紙に書いてくだされぃ。',
                     `今欲しいものを1つだけ、紙に書き留めてくださらんか。`,
                     'そなたの好きな動物になりきって、5分間を過ごしてみてくれださらんか。',
                     '思い出の場所を1つ、紙に書いてくだされ。',
                 '将来のそなたが見ている、理想の光景をできるだけ細かい部分まで紙に書いてくださるかな？'
            ];
    let shikasay = ['ものまねできそうな人の曲をあげて、本人のつもりで1曲歌いあげてくださいますか？',
                       `唐突ですが、好きな芸能人を1人あげて、魅力を熱く語って頂けますか。ちなみにわたくしは${sfr}さん推しです。`,
                      `「落穂ひろい→→→考える人→→→自由の女神」のポーズを順番通りに${search8+1}回繰り返して頂けます？`,
                       `好きな映画は何ですか？好きなシーンを教えてください。わたくしのオススメは「${sfr2}」ですね。`,
                    `次のお題を想像で絵に描いてもらえますか？お題：「${sfr3}」`,
                    'マフィアのボスになったつもりで、頼りない舎弟に喝(かつ)を入れて頂けますか？',
                    '泣いている赤ちゃんがもし言葉を話せたとしたら、何と言うか大声で叫んで頂けますか？',
                     `ショパンのピアノ曲をバックに、独創的なダンスを踊って頂けますか？テーマはずばり、『${sfr6}』です。`,
                    '大好きな曲のサビを今から少し・・大声で歌ってくださいます？',
                    `自分ひとりで、「有名人の名前しりとり」を${search7+1}人分続けてもらえますか？`,
                    '宝石泥棒の現場に残された手掛かりは、金髪のカツラと毛皮のコートとつけ爪。探偵として推理して頂けますか？',
                    `あなたは俳優さんです。今回『${sfr5}』役の依頼が来ました。さっそく1分間演じて頂けますか？`,
                    '今いる部屋の、一番高いところに登ってもらえます？そこから神になったつもりで下界を見下ろしましょう。',
                    `早口言葉「${sfr4}」×３を、ちゃんと言えるまで言い続けてください。`,
                    'ラジオ体操でおぼえているものを、心をこめて、力強く、やってくださいます？',
                    'ボクサーとしてリングにあがったつもりで、メイウェザーを倒してください。',
                    'もしお笑い芸人だったら、誰とコンビを組みたいです？その理由もできればこと細かく教えてくださいますか？',
                    'アニメの映像だけを流して、声優になりきって勝手なアフレコをつけてください。',
                    '行ってみたい場所にGoogleMapでを立てて、ストリートビューを見ながら旅レポートをして頂けますか？',
                    'アナウンサーになって、Yahooニュースを1つ読み上げて頂けますか？',
                    '空手の型を(勝手に考えて頂いて)押忍という掛け声とともに披露して頂けますか？',
                    '猿になったつもりで建物内の食べ物を探して頂けますか？見つけたら食べて頂いて結構です(猿風に)。',
                    'パントマイムで、透明の壁のやつをやって頂けますか？自分で納得がいくまで続けてください。',
                   'ネットで自分にフィットしそうな仏像を選び、そのポーズでなりきって3分間、心を静めてくださいますか？'];

    let nekosay = ['ファミチキ買ってこいニャ。',
                   'コーヒーでひと休みニャ。',
                   '冷凍庫のアイス食べていいニャ。',
                   'セブンにプリン買いにいくニャ。',
                   `${search3*2+1}分お昼寝していいニャ。`,
                   `${search3*5+1}分だけYoutube見ていいニャ。`,
                   `${search1+3}分間、瞑想するニャ。やり方わからなかったら適当でいいニャ。`,
                   'ボクをナデナデするニャ。',
                   `${search2+1}分だけ外をお散歩するニャ。`,
                   'ヨガの「タカのポーズ」をするニャ。知らなかったらググるニャ。',
                   `お菓子食べていいニャ。ただし${search2+1}コまでだニャ。`,
                   'お酒を飲んで休憩ニャ。',
                   `スクワットを${search2*20+1}回するニャ。できるはずニャ。`,
                   `反復横跳び${search1+1}秒間連続でするニャ。`,
                   `好きな音楽を${search1+6}分聞いてリラックスニャ。`,
                   `テレビを${search3*4+1}分だけ見ていいニャ。`,
                   `腹筋${search2*5+1}回するニャ、文句は言わニャいニャ！`,
                   `逆立ちを${search2*2+1}分間続けるニャ。三転倒立でもいいニャ。`,
                   'ヨガの「鋤のポーズ」をするニャ、漢字難しいのでコピペでググるニャ。',
                   `せんべい${search2+1}枚食べていいニャ。`,
                   `腕立てふせ${search2*10+1}回ニャ、泣き言は聞きたくニャいニャ！`,
                   `チョコレートを${search2+1}個食べていいニャ。`,
                   `ゲーム${search3*6+1}分やっていいニャ。`,
                  '紅茶とクッキーでリラックスタイムだニャ。'];



    document.getElementById('fukuroword').textContent = fukurosay[search1];
    document.getElementById('shikaword').textContent = shikasay[search2];
    document.getElementById('nekoword').textContent = nekosay[search3];
if(search>20 || search<1) {
                document.getElementById('fukuroword').textContent = '数字は1~20を入力するのじゃ。';
                document.getElementById('shikaword').textContent = 'そうして頂けるとありがたいです。';
                document.getElementById('nekoword').textContent = 'そうニャ！';
            }


}
