Search.setIndex({docnames:["index","lib/common/registry","lib/common/sample","lib/datasets/base_dataset","lib/datasets/base_dataset_builder","lib/datasets/processors","lib/models/base_model","lib/modules/losses","lib/modules/metrics","lib/utils/text"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","lib/common/registry.rst","lib/common/sample.rst","lib/datasets/base_dataset.rst","lib/datasets/base_dataset_builder.rst","lib/datasets/processors.rst","lib/models/base_model.rst","lib/modules/losses.rst","lib/modules/metrics.rst","lib/utils/text.rst"],objects:{"mmf.common":{registry:[1,0,0,"-"],sample:[2,0,0,"-"]},"mmf.common.registry":{Registry:[1,1,1,""]},"mmf.common.registry.Registry":{get:[1,2,1,""],register:[1,2,1,""],register_builder:[1,2,1,""],register_decoder:[1,2,1,""],register_fusion:[1,2,1,""],register_loss:[1,2,1,""],register_metric:[1,2,1,""],register_model:[1,2,1,""],register_processor:[1,2,1,""],register_trainer:[1,2,1,""],unregister:[1,2,1,""]},"mmf.common.sample":{Sample:[2,1,1,""],SampleList:[2,1,1,""]},"mmf.common.sample.Sample":{fields:[2,2,1,""]},"mmf.common.sample.SampleList":{add_field:[2,2,1,""],copy:[2,2,1,""],fields:[2,2,1,""],get_batch_size:[2,2,1,""],get_field:[2,2,1,""],get_fields:[2,2,1,""],get_item_list:[2,2,1,""],pin_memory:[2,2,1,""],to:[2,2,1,""],to_dict:[2,2,1,""]},"mmf.datasets":{base_dataset:[3,0,0,"-"],base_dataset_builder:[4,0,0,"-"]},"mmf.datasets.base_dataset":{BaseDataset:[3,1,1,""]},"mmf.datasets.base_dataset.BaseDataset":{load_item:[3,2,1,""],prepare_batch:[3,2,1,""]},"mmf.datasets.base_dataset_builder":{BaseDatasetBuilder:[4,1,1,""]},"mmf.datasets.base_dataset_builder.BaseDatasetBuilder":{build:[4,2,1,""],build_dataset:[4,2,1,""],load:[4,2,1,""],load_dataset:[4,2,1,""]},"mmf.datasets.processors":{bert_processors:[5,0,0,"-"],image_processors:[5,0,0,"-"],processors:[5,0,0,"-"]},"mmf.datasets.processors.bert_processors":{BertTokenizer:[5,1,1,""],MaskedTokenProcessor:[5,1,1,""]},"mmf.datasets.processors.bert_processors.MaskedTokenProcessor":{_truncate_seq_pair:[5,2,1,""]},"mmf.datasets.processors.image_processors":{GrayScaleTo3Channels:[5,1,1,""],TorchvisionTransforms:[5,1,1,""]},"mmf.datasets.processors.processors":{BBoxProcessor:[5,1,1,""],BaseProcessor:[5,1,1,""],CaptionProcessor:[5,1,1,""],CopyProcessor:[5,1,1,""],EvalAIAnswerProcessor:[5,1,1,""],FastTextProcessor:[5,1,1,""],GloVeProcessor:[5,1,1,""],M4CAnswerProcessor:[5,1,1,""],M4CCaptionProcessor:[5,1,1,""],MaskedRegionProcessor:[5,1,1,""],MultiHotAnswerFromVocabProcessor:[5,1,1,""],PhocProcessor:[5,1,1,""],Processor:[5,1,1,""],SimpleSentenceProcessor:[5,1,1,""],SimpleWordProcessor:[5,1,1,""],SoftCopyAnswerProcessor:[5,1,1,""],VQAAnswerProcessor:[5,1,1,""],VocabProcessor:[5,1,1,""]},"mmf.datasets.processors.processors.M4CAnswerProcessor":{match_answer_to_vocab_ocr_seq:[5,2,1,""]},"mmf.datasets.processors.processors.MultiHotAnswerFromVocabProcessor":{compute_answers_scores:[5,2,1,""]},"mmf.datasets.processors.processors.SimpleSentenceProcessor":{tokenizer:[5,3,1,""]},"mmf.datasets.processors.processors.SimpleWordProcessor":{tokenizer:[5,3,1,""]},"mmf.datasets.processors.processors.SoftCopyAnswerProcessor":{get_true_vocab_size:[5,2,1,""],get_vocab_size:[5,2,1,""]},"mmf.datasets.processors.processors.VQAAnswerProcessor":{answer_vocab:[5,3,1,""],compute_answers_scores:[5,2,1,""],get_true_vocab_size:[5,2,1,""],get_vocab_size:[5,2,1,""],idx2word:[5,2,1,""],word2idx:[5,2,1,""]},"mmf.datasets.processors.processors.VocabProcessor":{get_pad_index:[5,2,1,""],get_vocab_size:[5,2,1,""],vocab:[5,3,1,""]},"mmf.models":{base_model:[6,0,0,"-"]},"mmf.models.base_model":{BaseModel:[6,1,1,""]},"mmf.models.base_model.BaseModel":{build:[6,2,1,""],format_for_prediction:[6,2,1,""],format_state_key:[6,2,1,""],forward:[6,2,1,""],init_losses:[6,2,1,""],load_state_dict:[6,2,1,""]},"mmf.modules":{losses:[7,0,0,"-"],metrics:[8,0,0,"-"]},"mmf.modules.losses":{AttentionSupervisionLoss:[7,1,1,""],BinaryCrossEntropyLoss:[7,1,1,""],CaptionCrossEntropyLoss:[7,1,1,""],CombinedLoss:[7,1,1,""],CrossEntropyLoss:[7,1,1,""],LogitBinaryCrossEntropy:[7,1,1,""],Losses:[7,1,1,""],M4CDecodingBCEWithMaskLoss:[7,1,1,""],MMFLoss:[7,1,1,""],MultiLoss:[7,1,1,""],NLLLoss:[7,1,1,""],SoftmaxKlDivLoss:[7,1,1,""],WeightedSoftmaxLoss:[7,1,1,""],WrongLoss:[7,1,1,""]},"mmf.modules.losses.AttentionSupervisionLoss":{forward:[7,2,1,""]},"mmf.modules.losses.BinaryCrossEntropyLoss":{forward:[7,2,1,""]},"mmf.modules.losses.CaptionCrossEntropyLoss":{forward:[7,2,1,""]},"mmf.modules.losses.CombinedLoss":{forward:[7,2,1,""]},"mmf.modules.losses.CrossEntropyLoss":{forward:[7,2,1,""]},"mmf.modules.losses.LogitBinaryCrossEntropy":{forward:[7,2,1,""]},"mmf.modules.losses.Losses":{forward:[7,2,1,""],losses:[7,3,1,""]},"mmf.modules.losses.M4CDecodingBCEWithMaskLoss":{forward:[7,2,1,""]},"mmf.modules.losses.MMFLoss":{forward:[7,2,1,""]},"mmf.modules.losses.MultiLoss":{forward:[7,2,1,""]},"mmf.modules.losses.NLLLoss":{forward:[7,2,1,""]},"mmf.modules.losses.SoftmaxKlDivLoss":{forward:[7,2,1,""]},"mmf.modules.losses.WeightedSoftmaxLoss":{forward:[7,2,1,""]},"mmf.modules.losses.WrongLoss":{forward:[7,2,1,""]},"mmf.modules.metrics":{Accuracy:[8,1,1,""],AveragePrecision:[8,1,1,""],BaseMetric:[8,1,1,""],BinaryF1:[8,1,1,""],CaptionBleu4Metric:[8,1,1,""],F1:[8,1,1,""],MacroAP:[8,1,1,""],MacroF1:[8,1,1,""],MacroROC_AUC:[8,1,1,""],MeanRank:[8,1,1,""],MeanReciprocalRank:[8,1,1,""],Metrics:[8,1,1,""],MicroAP:[8,1,1,""],MicroF1:[8,1,1,""],MicroROC_AUC:[8,1,1,""],MultiLabelF1:[8,1,1,""],MultiLabelMacroF1:[8,1,1,""],MultiLabelMicroF1:[8,1,1,""],OCRVQAAccuracy:[8,1,1,""],ROC_AUC:[8,1,1,""],RecallAt10:[8,1,1,""],RecallAt1:[8,1,1,""],RecallAt5:[8,1,1,""],RecallAtK:[8,1,1,""],STVQAANLS:[8,1,1,""],STVQAAccuracy:[8,1,1,""],TextCapsBleu4:[8,1,1,""],TextVQAAccuracy:[8,1,1,""],VQAAccuracy:[8,1,1,""],VQAEvalAIAccuracy:[8,1,1,""]},"mmf.modules.metrics.Accuracy":{calculate:[8,2,1,""]},"mmf.modules.metrics.AveragePrecision":{calculate:[8,2,1,""]},"mmf.modules.metrics.BaseMetric":{calculate:[8,2,1,""]},"mmf.modules.metrics.CaptionBleu4Metric":{calculate:[8,2,1,""]},"mmf.modules.metrics.F1":{calculate:[8,2,1,""]},"mmf.modules.metrics.MeanRank":{calculate:[8,2,1,""]},"mmf.modules.metrics.MeanReciprocalRank":{calculate:[8,2,1,""]},"mmf.modules.metrics.ROC_AUC":{calculate:[8,2,1,""]},"mmf.modules.metrics.RecallAt1":{calculate:[8,2,1,""]},"mmf.modules.metrics.RecallAt10":{calculate:[8,2,1,""]},"mmf.modules.metrics.RecallAt5":{calculate:[8,2,1,""]},"mmf.modules.metrics.RecallAtK":{calculate:[8,2,1,""]},"mmf.modules.metrics.TextVQAAccuracy":{calculate:[8,2,1,""]},"mmf.modules.metrics.VQAAccuracy":{calculate:[8,2,1,""]},"mmf.modules.metrics.VQAEvalAIAccuracy":{calculate:[8,2,1,""]},"mmf.utils":{text:[9,0,0,"-"]},"mmf.utils.text":{BeamSearch:[9,1,1,""],NucleusSampling:[9,1,1,""],TextDecoder:[9,1,1,""],generate_ngrams:[9,4,1,""],generate_ngrams_range:[9,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"1gram":9,"2gram":9,"300d":5,"3gram":9,"abstract":[5,7,8],"break":5,"case":[5,6,7],"class":[1,2,3,4,5,6,7,8,9],"default":[1,2,5,6,9],"final":6,"float":[7,8,9],"function":[1,2,3,4,5,6,7,8],"import":[1,4,5,6,7,8],"int":[2,3,5,9],"new":[2,4,5,9],"return":[1,2,3,4,5,6,7,8,9],"super":[4,6,8],"true":[1,2,5,6],"try":9,"while":[2,5,7],For:[4,6,7,8,9],NOT:4,One:7,The:[5,8,9],Then:7,There:2,Use:5,Used:7,Useful:[1,6],Using:[0,5],__call__:5,__dict__:2,__getitem__:[2,5],__init__:[4,5,6,8],_call:5,_truncate_seq_pair:5,about:[5,7],abov:8,abs:5,accept:[2,5],access:[2,5],accord:[5,6],accur:8,accuraci:[5,8],act:[1,7,8],actual:[2,5],adapt:6,add:[2,3,4,5],add_field:2,added:[2,4,5,6],adding:4,address:5,adher:6,after:[2,5,6],afterward:7,all:[2,5,6,7,8,9],allow:[2,5],alreadi:6,also:[5,6,7],although:7,alwai:8,amanpreet:0,among:8,amount:9,ani:[0,2,5,8],answer:5,answer_vocab:5,answers_indic:5,answers_token:5,api:2,appli:2,approach:9,arbitrari:2,arg:[3,4,5,6,7,8],argument:[2,6,8],arrai:5,arxiv:[5,9],attent:7,attention_supervis:7,attentionsupervisionloss:7,attribut:[2,5,7,9],author:0,automat:[3,6],avail:[4,5],averag:8,average_precision_scor:8,averageprecis:8,avoid:9,back:[6,8],backward:6,base:[3,4,5,6,7,8,9],base_dataset:[0,4],base_dataset_build:[0,1],base_model:[0,1],basedataset:[3,4,5],basedatasetbuild:[1,4],basemetr:[1,8],basemodel:[1,6,7],baseprocessor:[1,5],batch:[2,3],batra:0,bbox:5,bbox_typ:5,bboxprocessor:5,beam:9,beamsearch:9,behind:9,being:6,below:[6,7],bert_processor:5,berttoken:5,better:9,binari:[7,8],binary_f1:8,binarycrossentropyloss:7,binaryf1:8,bit:5,bleu4:8,bool:[1,2,6],both:[5,8],bound:5,bounding_box:5,box:5,buffer:6,build:[4,6],build_dataset:4,builder:[1,4],built:[0,6],cach:3,calcul:[6,7,8],call:[4,6,7,8],can:[0,1,2,3,5,6,7,8,9],candid:8,caption:[0,5,7,8],caption_bleu4:8,captionbleu4metr:8,captioncrossentropyloss:7,captionprocessor:5,care:[2,7,8],ceil:9,central:1,cheatsheet:6,chen:0,child:[3,4,6,8],choos:9,chosen:8,cite:0,classmethod:[1,6],clean:5,code:[5,6],collat:2,collect:9,com:0,combin:[2,7],combinedloss:7,common:[0,4,5,6,7,8,9],commonli:8,compar:8,comparis:8,compat:[5,6],complet:4,comput:[5,7],compute_answers_scor:5,concept:1,config:[1,3,4,5,6,7,8,9],configur:[3,4,5,6,7],constructor:8,contain:[2,3,4,5,6,7,8,9],context:2,contrast:9,convert:[2,5],coordin:5,copi:[2,5,6],copyprocessor:5,correspond:5,creat:[2,5,6,8],cross:7,crossentropyloss:7,cumul:9,current:[2,3,5,6,8],custom:[0,2,3,5,7,8],custom_train:1,customloss:7,customtrain:1,data:[2,4,5],data_dir:5,dataload:[6,7,8],dataset:[0,1,2,6,7],dataset_config:5,dataset_nam:[3,4],dataset_typ:[3,4],decod:[1,5,9],decor:[1,6,8],def:[2,4,5,6,8],defin:[2,5,7,8],descend:6,descript:[7,8],detail:8,detect:[0,7],devi:0,devic:[2,3],devlop:0,dhruv:0,dialog:0,dict:[2,5,6,7,8],dictconfig:[3,4,5,6,8],dictionari:[2,7],differ:[1,5,7],dimens:5,directli:[3,5,8],doc:0,document:0,doesn:[1,7],doing:6,done:6,down:5,download:[4,6],dtype:8,due:5,dure:2,dynam:5,each:[5,7,8,9],eas:4,easi:[2,7],effici:2,effort:2,either:5,embedding_nam:5,end:[3,5,7,9],enforc:6,entropi:7,env:5,etc:8,eval:[5,8],evalaianswerprocessor:5,even:9,everi:[5,7],everyth:6,exactli:6,exampl:[4,5,6,7,8],exist:[1,5],expect:[5,8],extra:5,facebookresearch:0,fals:1,fasttext:5,fasttextprocessor:5,featur:[5,6],field:[2,6,8],figur:7,file:[5,8],find:8,first:[4,8],fix:5,floattensor:[5,7,8],follow:[5,6,7,8,9],format:[5,6],format_for_predict:6,format_state_kei:6,former:7,formula:5,forward:[3,6,7],framework:0,from:[1,2,3,4,5,6,7,8,9],full:8,further:5,fusion:1,futur:4,gather:6,gener:[1,2,5,7,9],generate_ngram:9,generate_ngrams_rang:9,get:[1,2,5],get_batch_s:[2,6],get_field:2,get_item_list:2,get_pad_index:5,get_true_vocab_s:5,get_vocab_s:5,github:0,given:7,global:[1,6],glove:[1,5],gloveprocessor:5,goswami:0,gpt:9,grayscaleto3channel:5,greater:9,greedi:9,handl:8,happen:6,has:9,hate:0,have:[2,5,8,9],height:5,help:5,helper:7,here:[3,4,6,8],high:9,hook:7,how:8,howpublish:0,http:[0,5,9],human:9,idx2word:5,idx:[3,5],ignor:[2,7],imag:[0,5],image_processor:5,imdb:4,implement:[3,4,5,6,7,8,9],improv:9,includ:5,index:[0,3,5],indic:[5,8],individu:2,infer:9,info:5,inform:[1,4,5,8],inherit:[3,4,5,6,8,9],init:[2,5,7],init_dict:2,init_loss:6,init_processor:4,initi:[2,3,5,6,8],input:[5,6,8],insid:[2,5],inspir:1,instanc:[4,7],instanti:7,instantt:7,instead:[4,7],integr:6,intern:[1,2,4,6,7,8],intersect:5,introduc:9,issu:9,item:[1,3,5],iter:[5,6,8],its:[5,6],itself:5,jiang:0,just:[2,6],keep:5,kei:[1,2,5,6,7,8],kept:2,keyword:8,kind:[1,5],kwarg:[3,4,5,6,7,8],label:8,languag:[0,7,9],last:5,later:5,latter:7,length:5,let:5,librari:0,like:[5,7,9],likelihood:[7,9],likelikehood:7,linear_sum:1,linearsum:1,link:9,list:[2,3,5,6,7,8,9],listconfig:[7,8],load:[3,4,6],load_dataset:4,load_item:3,load_state_dict:6,log:7,logic:5,logit:[6,7,8],logit_bc:[1,7],logitbc:1,logitbinarycrossentropi:7,longtensor:5,look:5,lorra:5,loss:[0,1,6],loss_list:7,lot:9,low:9,m4c:5,m4canswerprocessor:5,m4ccaptionprocessor:5,m4cdecodingbcewithmaskloss:7,macro:8,macro_ap:8,macro_f1:8,macro_roc_auc:8,macroap:8,macrof1:8,macroroc_auc:8,made:2,main:[4,9],mainli:5,maintain:[1,5],make:[5,6,7,8],mani:8,map:[1,5],marcu:0,maskedregionprocessor:5,maskedtokenprocessor:5,match:[5,6],match_answer_to_vocab_ocr_seq:5,matter:5,max:5,max_length:5,max_match_num:5,maxim:9,maximum:5,mean:8,mean_r:8,mean_rr:8,meanrank:8,meanreciprocalrank:8,meet:0,mention:3,merger:2,method:[4,6,8,9],metric:[0,1],metric_list:8,micro:8,micro_ap:8,micro_f1:8,micro_roc_auc:8,microap:8,microf1:8,microroc_auc:8,minimum:2,misc:0,miss:6,missing_kei:6,mix:9,mmf:[1,2,3,4,5,6,7,8,9],mmfloss:7,model:[0,1,2,3,7,8,9],model_config:[6,7,8,9],model_output:[7,8],modifi:6,modul:[0,1,5,6,9],modular:0,more:[4,8],moreov:9,mostli:7,move:[2,3,5],multi:7,multihotanswerfromvocabprocessor:5,multilabel:8,multilabel_f1:8,multilabel_macro_f1:8,multilabel_micro_f1:8,multilabelf1:8,multilabelmacrof1:8,multilabelmicrof1:8,multiloss:7,multimod:0,multipl:7,must:[2,4,5,6,8],my_processor:5,mybuild:4,myprocessor:5,name:[1,3,4,5,8],namedtupl:6,natarajan:0,necessari:5,need:[1,2,3,4,5,6,7,8],neg:7,ngram:9,ngram_rang:9,nllloss:7,no_warn:1,node:5,non_block:2,none:[1,2,7,8],noqa:8,normal:[3,5,7],note:[6,8],nucleu:9,nucleus_sampl:1,nucleussampl:[1,9],num_answ:5,number:[5,8],numpi:5,obj:1,object:[1,2,5,6],ocr2inds_dict:5,ocr:5,ocrvqaaccuraci:8,one:[2,7,8],onli:[2,5,8],open:9,oper:1,opinion:5,optim:1,option:[5,6,9],org:[5,9],origin:7,other:[0,2,6,9],our:8,out:7,output:[6,7,8],over:[5,8],overal:9,overrid:4,overridden:[3,7],own:8,pad:5,page:0,pair:5,paper:9,param:[5,7,8,9],paramet:[1,2,3,4,5,6,7,8,9],parikh:0,part:5,particular:[2,7,9],pass:[1,2,3,4,5,7,8],path:4,pdf:9,perform:[7,8],persist:6,phoc:5,phocprocessor:5,pin:2,pin_memori:2,pipelin:5,place:5,plan:4,pleas:0,point:[5,8],possibl:[3,5],precis:8,predict:6,prepar:[2,3,4],prepare_batch:3,preprocess:5,preprocessor:5,present:[2,6,9],pretrain:6,probabl:9,procesor:5,process:5,processor:[0,1,3],proper:[3,5,7,8],properli:2,properti:5,provid:8,publish:0,pythia:[1,6,8],pytorch:[0,2,3],quick:6,rand:6,rank:8,rather:9,raw:5,read:[0,5],realli:5,reason:9,recal:8,recallat10:8,recallat1:[1,8],recallat5:8,recallatk:8,recip:7,reciproc:8,redux:1,refer:[0,5],regist:[1,2,5,6,7,8],register_build:[1,4],register_decod:1,register_fus:1,register_loss:[1,7],register_metr:[1,8],register_model:[1,6],register_optim:1,register_processor:[1,5],register_schedul:1,register_task:1,register_train:1,registeri:1,registri:[0,4,5,6,7,8],relat:6,remov:1,repeat:9,report:6,repres:[2,3,5,8],represent:2,requir:[2,6,8],research:0,resolv:9,result:[6,9],retriev:[1,5],reus:5,right:9,roc_auc:8,roc_auc_scor:8,rohrbach:0,run:[7,8],same:[5,9],sampl:[0,3,5,9],sample_list:[2,3,6,7,8],samplelist:[2,3,6,7,8],schedul:1,score:[5,6,7,8],search:[0,9],section:9,see:[4,6,8],self:[2,4,5,6,8],sentenc:5,separ:[3,6,7],sequenc:5,set:[7,9],setup:4,shah:0,should:[2,6,7,8],silent:7,similar:[2,4,5,7,8],simpl:2,simple_sent:5,simplesentenceprocessor:5,simplewordprocessor:5,sinc:7,singh2020mmf:0,singh:0,singl:2,size:[2,5],sklearn:8,slower:8,smaller:5,smallest:9,soft:5,softcopyanswerprocessor:5,softmax:8,softmaxkldivloss:7,some:[2,3,5,6,7,8],some_model:[7,9],some_param:8,somemetr:8,someth:6,sourc:[1,2,3,4,5,6,7,8,9],space:[5,7],special:[1,6],specif:4,specifi:[5,7,8,9],split:5,start:5,state_dict:6,step:[5,8],stochast:9,store:1,str:[2,3,4,5,6,8,9],strategi:9,strict:6,strictli:6,string:[1,3,5,6,9],strip:5,strong:9,structur:[2,5],stvqaaccuraci:8,stvqaanl:8,subclass:[4,7],sum:9,sum_threshold:9,supercharg:0,supervis:7,support:5,sure:[6,7,8],take:[2,5,6,7,8],target:7,task:[0,9],techniqu:1,tend:9,tensor:[2,5,8],term:2,test:[3,4],text:[0,1,2,3,5],text_processor:5,textcapsbleu4:8,textdecod:[1,9],textvqa:5,textvqaaccuraci:8,than:[6,9],thei:[5,6,9],them:[5,7,8],thi:[2,4,5,6,7,8,9],thing:2,those:5,thought:2,threshold:9,time:[4,8],titl:0,to_dict:2,token:[5,9],tokens_a:5,tokens_b:5,top:[0,3,4,6,8,9],top_left_i:5,top_left_x:5,torch:[1,2,4,5,6,7,8],torchscript:2,torchvisiontransform:5,train:[0,3,4,7],trainer:[1,6],truncat:5,truth:1,try_fast_read:4,tutori:0,txt:5,type:[2,3,4,5,6,7,8,9],under:2,understand:[5,8],unexpect:6,unexpected_kei:6,unif:2,uniqu:1,unk:5,unregist:1,updat:6,upon:9,url:0,usag:[1,2],use:[0,4,7,8,9],used:[1,2,3,4,5,7,8],useful:2,user:[3,5,7],using:[1,5,6,7,8],util:[0,1,4],val:[3,4,7,8],valu:[1,2,5,7,8],variou:[1,5,7,8,9],vector:5,vedanuj:0,via:5,vision:[0,7],visual:0,visualbert:6,vivek:0,vocab2idx_dict:5,vocab:[5,9],vocab_fil:5,vocabdict:5,vocabprocessor:5,vocabulari:[5,9],vocabulary_100k:5,vqa2:[1,5,7],vqa2build:1,vqa2datasetbuild:4,vqa:[0,5,8],vqa_accuraci:8,vqa_evalai_accuraci:8,vqaaccuraci:8,vqaanswerprocessor:5,vqaevalaiaccuraci:8,wai:[2,7,9],want:[5,7],warn:1,weight:7,weight_softmax:7,weightedsoftmaxloss:7,well:[5,8,9],were:2,what:[5,8],whatev:3,when:[1,4,5,6,8],where:[5,7,8],whether:[2,6],which:[1,2,5,6,7,8,9],whose:[1,2],width:5,within:7,word2idx:5,word:[5,9],work:[0,2,5,7,9],worri:7,wrapper:[5,7,8],write:6,wrongloss:7,xinlei:0,xywh:5,xyxi:5,year:0,you:[0,3,5,6,7,8,9],your:[0,3,4,5,6,7,8,9],zero_:2},titles:["MMF","common.registry","common.sample","datasets.base_dataset","datasets.base_dataset_builder","datasets.processors","models.base_model","modules.losses","modules.metrics","utils.text"],titleterms:{base_dataset:3,base_dataset_build:4,base_model:6,citat:0,common:[1,2],dataset:[3,4,5],indic:0,loss:7,metric:8,mmf:0,model:6,modul:[7,8],processor:5,registri:1,sampl:2,tabl:0,text:9,util:9}})