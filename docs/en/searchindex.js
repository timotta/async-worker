Search.setIndex({docnames:["changelog/index","changelog/v0.10.0","changelog/v0.10.1","changelog/v0.11.0","changelog/v0.11.1","changelog/v0.11.2","changelog/v0.11.3","devguide/index","devguide/tests","incompat","index","intro","src/asyncworker/asyncworker","src/asyncworker/asyncworker.connections","src/asyncworker/asyncworker.easyqueue","src/asyncworker/asyncworker.exceptions","src/asyncworker/asyncworker.rabbitmq","src/asyncworker/asyncworker.signals","src/asyncworker/asyncworker.signals.handlers","src/asyncworker/asyncworker.sse","src/asyncworker/asyncworker.testing","src/asyncworker/asyncworker.types","src/asyncworker/modules","userguide/asyncworker-app/hooks","userguide/asyncworker-app/index","userguide/asyncworker-app/intro","userguide/asyncworker-app/storage","userguide/handlers/http","userguide/handlers/index","userguide/handlers/rabbitmq","userguide/index","userguide/quickstart","userguide/updates/index","userguide/utils/index","userguide/utils/run_every","userguide/utils/timeit"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["changelog/index.rst","changelog/v0.10.0.rst","changelog/v0.10.1.rst","changelog/v0.11.0.rst","changelog/v0.11.1.rst","changelog/v0.11.2.rst","changelog/v0.11.3.rst","devguide/index.rst","devguide/tests.rst","incompat.rst","index.rst","intro.rst","src/asyncworker/asyncworker.rst","src/asyncworker/asyncworker.connections.rst","src/asyncworker/asyncworker.easyqueue.rst","src/asyncworker/asyncworker.exceptions.rst","src/asyncworker/asyncworker.rabbitmq.rst","src/asyncworker/asyncworker.signals.rst","src/asyncworker/asyncworker.signals.handlers.rst","src/asyncworker/asyncworker.sse.rst","src/asyncworker/asyncworker.testing.rst","src/asyncworker/asyncworker.types.rst","src/asyncworker/modules.rst","userguide/asyncworker-app/hooks.rst","userguide/asyncworker-app/index.rst","userguide/asyncworker-app/intro.rst","userguide/asyncworker-app/storage.rst","userguide/handlers/http.rst","userguide/handlers/index.rst","userguide/handlers/rabbitmq.rst","userguide/index.rst","userguide/quickstart.rst","userguide/updates/index.rst","userguide/utils/index.rst","userguide/utils/run_every.rst","userguide/utils/timeit.rst"],objects:{"":{asyncworker:[12,0,0,"-"]},"asyncworker.app":{App:[12,1,1,""]},"asyncworker.app.App":{freeze:[12,2,1,""],get_connection:[12,2,1,""],get_connection_for_route:[12,2,1,""],handlers:[12,3,1,""],route:[12,2,1,""],run:[12,2,1,""],run_every:[12,2,1,""],run_on_shutdown:[12,2,1,""],run_on_startup:[12,2,1,""],shutdown:[12,2,1,""],shutdown_os_signals:[12,3,1,""],startup:[12,2,1,""]},"asyncworker.bucket":{Bucket:[12,1,1,""],BucketFullException:[12,4,1,""]},"asyncworker.bucket.Bucket":{is_empty:[12,2,1,""],is_full:[12,2,1,""],pop_all:[12,2,1,""],put:[12,2,1,""],used:[12,2,1,""]},"asyncworker.conf":{Settings:[12,1,1,""]},"asyncworker.conf.Settings":{Config:[12,1,1,""]},"asyncworker.conf.Settings.Config":{allow_mutation:[12,3,1,""],env_prefix:[12,3,1,""]},"asyncworker.connections":{AMQPConnection:[12,1,1,""],Connection:[12,1,1,""],ConnectionsMapping:[12,1,1,""],SSEConnection:[12,1,1,""]},"asyncworker.connections.AMQPConnection":{Config:[12,1,1,""],items:[12,2,1,""],keys:[12,2,1,""],put:[12,2,1,""],register:[12,2,1,""],set_connections:[12,2,1,""],values:[12,2,1,""]},"asyncworker.connections.AMQPConnection.Config":{arbitrary_types_allowed:[12,3,1,""]},"asyncworker.connections.ConnectionsMapping":{add:[12,2,1,""],with_type:[12,2,1,""]},"asyncworker.consumer":{Consumer:[12,1,1,""]},"asyncworker.consumer.Consumer":{consume_all_queues:[12,2,1,""],keep_runnig:[12,2,1,""],on_before_start_consumption:[12,2,1,""],on_connection_error:[12,2,1,""],on_consumption_start:[12,2,1,""],on_message_handle_error:[12,2,1,""],on_queue_error:[12,2,1,""],on_queue_message:[12,2,1,""],queue_name:[12,2,1,""],start:[12,2,1,""]},"asyncworker.easyqueue":{connection:[14,0,0,"-"],exceptions:[14,0,0,"-"],message:[14,0,0,"-"],queue:[14,0,0,"-"]},"asyncworker.easyqueue.connection":{AMQPConnection:[14,1,1,""]},"asyncworker.easyqueue.connection.AMQPConnection":{close:[14,2,1,""],connection_parameters:[14,2,1,""],is_connected:[14,2,1,""]},"asyncworker.easyqueue.exceptions":{EmptyQueueException:[14,4,1,""],InvalidMessageSizeException:[14,4,1,""],MessageError:[14,4,1,""],UndecodableMessageException:[14,4,1,""]},"asyncworker.easyqueue.message":{AMQPMessage:[14,1,1,""]},"asyncworker.easyqueue.message.AMQPMessage":{ack:[14,2,1,""],channel:[14,3,1,""],connection:[14,3,1,""],delivery_tag:[14,3,1,""],deserialized_data:[14,2,1,""],queue_name:[14,3,1,""],reject:[14,2,1,""],serialized_data:[14,3,1,""]},"asyncworker.easyqueue.queue":{BaseJsonQueue:[14,1,1,""],BaseQueue:[14,1,1,""],DeliveryModes:[14,1,1,""],JsonQueue:[14,1,1,""],QueueConsumerDelegate:[14,1,1,""]},"asyncworker.easyqueue.queue.BaseJsonQueue":{content_type:[14,3,1,""],deserialize:[14,2,1,""],serialize:[14,2,1,""]},"asyncworker.easyqueue.queue.BaseQueue":{deserialize:[14,2,1,""],serialize:[14,2,1,""]},"asyncworker.easyqueue.queue.DeliveryModes":{NON_PERSISTENT:[14,3,1,""],PERSISTENT:[14,3,1,""]},"asyncworker.easyqueue.queue.JsonQueue":{consume:[14,2,1,""],deserialize:[14,2,1,""],put:[14,2,1,""],serialize:[14,2,1,""],stop_consumer:[14,2,1,""]},"asyncworker.easyqueue.queue.QueueConsumerDelegate":{on_before_start_consumption:[14,2,1,""],on_connection_error:[14,2,1,""],on_consumption_start:[14,2,1,""],on_message_handle_error:[14,2,1,""],on_queue_message:[14,2,1,""]},"asyncworker.exceptions":{InvalidConnection:[12,4,1,""],InvalidRoute:[12,4,1,""]},"asyncworker.options":{Actions:[12,1,1,""],AutoNameEnum:[12,1,1,""],DefaultValues:[12,1,1,""],Events:[12,1,1,""],Options:[12,1,1,""],RouteTypes:[12,1,1,""]},"asyncworker.options.Actions":{ACK:[12,3,1,""],REJECT:[12,3,1,""],REQUEUE:[12,3,1,""]},"asyncworker.options.DefaultValues":{BULK_FLUSH_INTERVAL:[12,3,1,""],BULK_SIZE:[12,3,1,""],ON_EXCEPTION:[12,3,1,""],ON_SUCCESS:[12,3,1,""],RUN_EVERY_MAX_CONCURRENCY:[12,3,1,""]},"asyncworker.options.Events":{ON_EXCEPTION:[12,3,1,""],ON_SUCCESS:[12,3,1,""]},"asyncworker.options.Options":{BULK_FLUSH_INTERVAL:[12,3,1,""],BULK_SIZE:[12,3,1,""],MAX_CONCURRENCY:[12,3,1,""]},"asyncworker.options.RouteTypes":{AMQP_RABBITMQ:[12,3,1,""],HTTP:[12,3,1,""],SSE:[12,3,1,""]},"asyncworker.rabbitmq":{message:[16,0,0,"-"]},"asyncworker.rabbitmq.message":{RabbitMQMessage:[16,1,1,""]},"asyncworker.rabbitmq.message.RabbitMQMessage":{accept:[16,2,1,""],body:[16,2,1,""],process_exception:[16,2,1,""],process_success:[16,2,1,""],reject:[16,2,1,""],serialized_data:[16,2,1,""]},"asyncworker.routes":{AMQPRoute:[12,1,1,""],HTTPRoute:[12,1,1,""],Model:[12,1,1,""],Route:[12,1,1,""],RoutesRegistry:[12,1,1,""],SSERoute:[12,1,1,""],call_http_handler:[12,5,1,""],http_handler_wrapper:[12,5,1,""]},"asyncworker.routes.HTTPRoute":{aiohttp_routes:[12,2,1,""],validate_method:[12,2,1,""]},"asyncworker.routes.Model":{get:[12,2,1,""],keys:[12,2,1,""]},"asyncworker.routes.Route":{factory:[12,2,1,""]},"asyncworker.routes.RoutesRegistry":{add_route:[12,2,1,""],amqp_routes:[12,3,1,""],http_routes:[12,3,1,""],route_for:[12,2,1,""],sse_routes:[12,3,1,""]},"asyncworker.routes.SSERoute":{add_default_headers:[12,2,1,""]},"asyncworker.signals":{base:[17,0,0,"-"],handlers:[18,0,0,"-"]},"asyncworker.signals.base":{Freezable:[17,1,1,""],Signal:[17,1,1,""]},"asyncworker.signals.base.Freezable":{freeze:[17,2,1,""],frozen:[17,2,1,""]},"asyncworker.signals.base.Signal":{send:[17,2,1,""]},"asyncworker.signals.handlers":{base:[18,0,0,"-"],http:[18,0,0,"-"],rabbitmq:[18,0,0,"-"],sse:[18,0,0,"-"]},"asyncworker.signals.handlers.base":{SignalHandler:[18,1,1,""]},"asyncworker.signals.handlers.base.SignalHandler":{shutdown:[18,2,1,""],startup:[18,2,1,""]},"asyncworker.signals.handlers.http":{HTTPServer:[18,1,1,""]},"asyncworker.signals.handlers.http.HTTPServer":{shutdown:[18,2,1,""],startup:[18,2,1,""]},"asyncworker.signals.handlers.rabbitmq":{RabbitMQ:[18,1,1,""]},"asyncworker.signals.handlers.rabbitmq.RabbitMQ":{startup:[18,2,1,""]},"asyncworker.signals.handlers.sse":{SSE:[18,1,1,""]},"asyncworker.signals.handlers.sse.SSE":{startup:[18,2,1,""]},"asyncworker.sse":{consumer:[19,0,0,"-"],message:[19,0,0,"-"]},"asyncworker.sse.consumer":{SSEConsumer:[19,1,1,""],State:[19,1,1,""]},"asyncworker.sse.consumer.SSEConsumer":{interval:[19,3,1,""],keep_runnig:[19,2,1,""],on_connection:[19,2,1,""],on_connection_error:[19,2,1,""],on_event:[19,2,1,""],on_exception:[19,2,1,""],start:[19,2,1,""]},"asyncworker.sse.consumer.State":{EVENT_DATA_FOUND:[19,3,1,""],EVENT_NAME_FOUND:[19,3,1,""],WAIT_FOR_DATA:[19,3,1,""]},"asyncworker.sse.message":{SSEMessage:[19,1,1,""]},"asyncworker.task_runners":{ScheduledTaskRunner:[12,1,1,""]},"asyncworker.task_runners.ScheduledTaskRunner":{can_dispatch_task:[12,2,1,""],start:[12,2,1,""],stop:[12,2,1,""]},"asyncworker.testing":{HttpClientContext:[12,1,1,""],http_client:[12,5,1,""]},"asyncworker.time":{ClockTicker:[12,1,1,""]},"asyncworker.time.ClockTicker":{stop:[12,2,1,""]},"asyncworker.types":{registry:[21,0,0,"-"],resolver:[21,0,0,"-"]},"asyncworker.types.registry":{TypesRegistry:[21,1,1,""]},"asyncworker.types.registry.TypesRegistry":{get:[21,2,1,""],set:[21,2,1,""]},"asyncworker.types.resolver":{ArgResolver:[21,1,1,""],MissingTypeAnnotationError:[21,4,1,""]},"asyncworker.types.resolver.ArgResolver":{resolve_param:[21,2,1,""],wrap:[21,2,1,""]},"asyncworker.utils":{Timeit:[12,1,1,""],entrypoint:[12,5,1,""]},"asyncworker.utils.Timeit":{TRANSACTIONS_KEY:[12,3,1,""]},asyncworker:{app:[12,0,0,"-"],bucket:[12,0,0,"-"],conf:[12,0,0,"-"],connections:[12,0,0,"-"],consumer:[12,0,0,"-"],easyqueue:[14,0,0,"-"],exceptions:[12,0,0,"-"],options:[12,0,0,"-"],rabbitmq:[16,0,0,"-"],routes:[12,0,0,"-"],signals:[17,0,0,"-"],sse:[19,0,0,"-"],task_runners:[12,0,0,"-"],testing:[12,0,0,"-"],time:[12,0,0,"-"],types:[21,0,0,"-"],utils:[12,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"0994415283203125e":35,"0x10c10c7c8":35,"\u00fanica":[],"\u00fanico":26,"a\u00e7\u00e3o":30,"abstract":[12,14],"ap\u00f3":29,"aplic\u00e1":27,"aplica\u00e7\u00e3o":[9,10,23,25,26],"aplica\u00e7\u00f5":9,"ass\u00edncrona":[9,10,24,30],"ass\u00edncrono":[9,10,23,35],"atr\u00e1vez":[],"atrav\u00e9":[27,30],"autentica\u00e7\u00e3o":27,"byte":[12,13,14,19],"c\u00f3digo":[9,25,26,27,31,35],"c\u00f3pia":28,"case":[],"causar\u00e1":9,"cen\u00e1rio":23,"ci\u00eancia":27,"class":[8,10,12,13,14,16,17,18,19,20,21,24,29,30,35],"come\u00e7a":25,"compat\u00edvel":29,"comunica\u00e7\u00e3o":29,"conclu\u00edda":29,"conex\u00e3o":[23,29,31],"conex\u00f5":[23,25],"conte\u00fado":32,"cria\u00e7\u00e3o":29,"declara\u00e7\u00e3o":29,"default":[12,29],"descri\u00e7\u00e3o":2,"dicion\u00e1rio":[26,29],"din\u00e2mico":27,"ent\u00e3o":[26,32],"enum":[12,19,25,32],"espec\u00edficament":[],"espec\u00edfico":9,"est\u00e1":[8,9,10,25,27,29,31,32],"est\u00e3o":[25,27,29],"est\u00edmulo":[9,10,25,28],"estar\u00e1":[25,30,31],"estat\u00e3o":29,"exca\u00e7\u00e3o":29,"exce\u00e7\u00e3o":35,"execu\u00e7\u00e3o":[16,29,35],"f\u00f3rmula":29,"far\u00e1":25,"far\u00e3o":25,"ficar\u00e1":31,"final":35,"finaliza\u00e7\u00e3o":23,"float":12,"fun\u00e7\u00e3o":[10,27,28,30,33],"fun\u00e7\u00f5":25,"function":27,"import":[23,27,29,31,32,34,35],"in\u00edcio":[10,30],"incompat\u00edvel":9,"informa\u00e7\u00f5":27,"inicializa\u00e7\u00e3o":23,"inicializa\u00e7\u00f5":[10,24,30],"inst\u00e2ncia":[25,26,27,29,31,32,35],"int":[12,14,16,29],"integra\u00e7\u00e3o":2,"intermedi\u00e1rio":27,"introdu\u00e7\u00e3o":10,"ir\u00e1":29,"lan\u00e7ar":[29,31],"m\u00e1ximo":29,"m\u00e3o":[],"m\u00e9tod":[],"m\u00e9todo":[1,25,27,29,32,34],"m\u00e9trica":35,"m\u00f3dulo":[25,31],"m\u00faltipla":[30,33],"m\u00faltiplo":[8,9,25],"manipula\u00e7\u00e3o":26,"manuten\u00e7\u00e3o":26,"n\u00e3o":[2,8,9,26,27,28,29],"n\u00famero":29,"necess\u00e1rio":[25,27,29],"new":[6,12,13,14,27,35],"obrigat\u00f3rio":[25,32],"op\u00e7\u00e3o":[],"op\u00e7\u00f5":[25,29],"padr\u00e3o":[8,27,29,32],"par\u00e2metro":[25,29],"parametriza\u00e7\u00e3o":30,"poder\u00e1":[26,28,29],"poss\u00edvei":25,"poss\u00edvel":[26,27,29,31,35],"pr\u00e1tica":26,"pr\u00e9via":29,"pr\u00f3prio":[26,27],"preced\u00eancia":29,"r\u00e1pido":[10,30],"raz\u00e3o":27,"receber\u00e1":[29,31],"renova\u00e7\u00e3o":9,"representar\u00e1":29,"requisi\u00e7\u00e3o":[10,31],"requisi\u00e7\u00f5":[27,30],"resolu\u00e7\u00e3o":27,"respons\u00e1vel":27,"return":[12,13,14,27,31],"s\u00e3o":[25,29],"saber\u00e1":27,"ser\u00e1":[16,25,28,30,34,35],"ser\u00e3o":25,"situa\u00e7\u00f5":29,"static":12,"tamb\u00e9m":[25,29,35],"ter\u00e1":9,"transa\u00e7\u00f5":[30,33],"true":[8,12,13,16,29,31],"unit\u00e1rio":[7,10],"usu\u00e1rio":27,"utilit\u00e1rio":[10,30],"utilit\u00e1tio":34,"utiliz\u00e1":26,"v\u00e1lido":27,"v\u00e1ria":[9,10,35],"v\u00eam":32,"var":[],"vari\u00e1vei":26,"vari\u00e1vel":29,"ver\u00e1":29,"vers\u00e3o":[4,32],"voc\u00ea":[8,9,10,25,26,28,29,31],Adding:6,Ele:25,Obs:26,THe:12,The:[12,14],Useful:14,__init__:[],_amqprouteopt:29,_asyncio:12,_handler:29,_hooks_:26,_on_ev:31,_type:21,_wrapper:27,abaixo:[10,28],abc:[12,13],aberta:23,abrimo:23,abstracteventloop:14,accept:[16,29],access:35,access_some_remote_cont:35,acessando:29,acesso:31,ack:[12,14,16,29,31,32],acordo:28,act:12,action:[12,16,29],add:[12,13],add_default_head:12,add_rout:12,adiant:27,adiciona:27,adicionado:27,adicionai:30,adicionando:1,adicionar:[1,8],age:26,agora:32,aguarda:29,aguardando:29,aioamqp:[6,14],aiohttp:[12,27,31],aiohttp_rout:12,aiologg:9,aioredi:23,alguma:[27,29,31],algun:[28,29],all:[12,13,14,17],allow:[12,13],allow_mut:12,along:12,also:[12,13],alterado:27,alterar:29,amba:[29,31],ambient:29,ambo:31,amqp:[],amqp_conn:[29,31],amqp_messag:[16,29],amqp_rabbitmq:[12,26,29,31,35],amqp_rout:12,amqpconnect:[12,13,14,30,31],amqpmessag:[12,14,16,29],amqprout:12,ancestr:[12,13],ani:[12,13,14,17,21],anotar:34,anoth:29,another_exchang:29,ant:23,anterior:[9,23],antigo:32,apena:[9,28,29,30],aplicado:27,aplicando:30,apllicado:[],app:[3,9,10,18,20,22,27,29,30,31,34,35],appid:31,applic:[12,14],aqui:[8,27,29],arbitrary_types_allow:[12,13],arg:17,argresolv:21,argument:[12,14,17],armazenando:[24,30],armazenar:26,aser:[],asgard:[29,31,32],assim:[23,27,29,31,32],assinatura:[25,27,29,32],assumindo:31,async:[10,12,13,14,16,17,18,19,23,26,27,29,31,32,34,35],asyncio:[12,14,17,35],asynciter:12,asyncowk:[25,27],asynctest:8,asyncwok:[],asyncwork:[1,9,23,26,27,28,29,30,31,34,35],asyncworker_:12,asyncworker_flush_timeout:29,asyncworker_http_host:27,asyncworker_http_port:27,asynqueu:[12,14],asynwork:31,atendar:31,atributo:[8,27,29,32],attr:[],atualizada:4,atualizando:[10,30],atualment:9,autenticado:27,autenticar:27,auth_requir:27,author:27,auto:[12,13],automat:12,automaticament:[29,31],autonameenum:12,avail:[12,13],await:[12,23,27,29,35],b2wdigit:10,backend:[],banco:23,base:[12,13,14,15,16,19,20,21,22],baseapp:[],basejsonqueu:14,basemodel:[12,13],basequeu:14,baseset:12,basic_auth:27,basta:[8,29,34],befor:[12,14],behav:[12,17],bem:[23,27],biblioteca:23,bind:27,bla:[],boa:26,bodi:[12,14,16,31,32],bool:[12,13,14],boot:25,broker:[10,14,29],bucket:[19,22,29],bucket_class:[12,19],bucketfullexcept:12,bulk:29,bulk_flush_interv:[6,12,29],bulk_siz:[12,31],cada:[8,25,28,30,31,32],call:[12,14],call_http_handl:[12,27],callabl:[12,14,35],callback:[12,14,17,35],can:14,can_dispatch_task:12,cancel:14,capaz:31,caso:[8,23,29,31,35],caus:12,causa:[8,28],central:25,certeza:8,chamada:[28,29,34,35],chamado:[25,27,28,29,35],chamamo:25,chamando:32,chamar:[27,29,35],chang:1,changelog:10,channel:14,chave:29,chegar:28,ciclo:[9,23,26],classmethod:[12,13],client:[14,23],clock:12,clocktick:12,close:[14,23],code:[1,6],codeown:1,coerent:2,collect:[12,13,17],com:[2,8,9,10,23,25,26,27,28,29,31,34,35],comando:31,commit:[3,4,5,6],common:[12,13],como:[9,10,23,25,26,27,28,29,35],compartilhado:26,compartilhamento:[10,24,30],compartilhar:23,compat:6,comportamento:9,comum:23,condit:[12,15],conduct:6,conectado:25,conf:22,config:[12,13],configurad:[],configurado:32,confirmada:[16,29,31],conflito:26,connecion:[],connect:[3,15,17,22,25,29,31],connection_paramet:14,connectionsmap:[12,13],conseguir:29,consiga:27,construtor:[25,29],consum:[14,22],consume_all_queu:12,consumer_nam:14,consumer_tag:[12,14],consumindo:30,consumo:[],consumpt:[12,14],contar:35,content:22,content_typ:14,conter:27,contexto:[30,33],contribut:6,coro:12,coro_ref:21,corotina:27,coroutin:[12,14,17,35],correta:27,corretament:27,count:[29,31,32],counter:[12,13],coverag:1,create_pool:23,cria:9,criada:23,criamo:32,criando:[8,24,30],criar:[28,29],curl:31,custom:[12,14],customizado:30,dada:30,dado:[10,23,24,27,30,35],das:[25,29],data:[12,13,14,17,29,31],dcorat:[],deadlock:29,declara:1,declaramo:[25,31],decod:14,decor:[12,13,25,30,33,34],decorada:27,decorando:27,decortor:29,def:[23,26,27,29,31,32,34,35],defaultvalu:[12,29],defin:[12,15],definida:29,definido:25,definindo:[24,29,30],definir:29,definit:[12,15],dele:[27,28],deleg:14,delegate_class:14,delivery_tag:[12,14,16,29],deliverymod:14,dentro:[25,29,35],depend:1,dependa:9,dependencia:2,dependento:25,depistada:[],deployment_info:31,deployment_success:31,depoi:[23,32],depositada:25,descartada:[16,29],desconectado:31,desejado:29,desenvolvimento:10,deseri:[12,14],deserialization_method:14,deserialized_data:14,dess:[27,28,29],dessa:[25,29,32],destino:29,detalh:[10,27,28],deve:[25,27,29],devem:27,deveremo:27,devolv:29,devolvida:[29,31,32],diariament:29,dict:[12,13,14,19,25,29],diferent:[9,10,28,29],diretament:27,disponibiliza:26,disso:[27,29],diz:29,dizer:25,doc:[1,6,8,27],dog:29,dos:[8,25,27,29],drain_handl:[26,29,31,32,35],durant:9,dure:[12,14],each:[12,13],easyqueu:[1,12,13,16,22,29],econtra:10,efetivament:25,ela:34,ele:[9,27,29],eles:29,emptyqueueexcept:14,enabl:6,encher:29,encontrado:27,encontrando:27,endpoint:30,entando:27,entend:[9,10,28],entrypoint:12,enumer:[12,19],env:[29,30],env_prefix:12,env_set:12,envelop:14,enviado:31,enviar:29,envvar:27,era:32,erro:[1,29,31],error:[12,29,31,32,35],escolh:[26,30],escolhendo:30,escolhido:29,escrev:[8,9,10,27,29],escrevendo:[7,9,10],escrita:[],escrito:29,escutando:30,especi:25,esperando:29,esperar:29,ess:[23,25,26,27,29,31],essa:[9,10,16,25,27,29,34],estado:26,estamo:31,estar:27,estavam:2,esteja:9,estimulado:27,estiv:29,esvaziar:29,etc:[],event:[10,12,14,17,29,30,32],event_bodi:19,event_data_found:19,event_handl:32,event_nam:[19,31],event_name_found:19,event_raw_bodi:19,evento:[9,10,23,28,31],everi:[12,14],every_5_second:34,evitar:[26,29],exc_tb:35,exc_typ:35,exc_val:35,except:[19,21,22,29,31,32],exchang:[12,13,14,29],executado:25,exemplo:[23,27,28,31],existem:29,exmeplo:25,explicitament:35,externo:28,extra_registri:21,extrair:27,facilitar:[],factori:12,fail:[12,14],falar:25,falaremo:31,fals:[12,13,14,16,29],fato:9,faz:[8,27],fazemo:27,fazer:[23,27],featur:[1,6],fechar:23,ficar:29,ficou:29,fila:[16,25,28,29,30,32],file:5,fim:[16,23,29],fiqu:29,fire:17,fixa:29,fixo:[10,30,33],flask:[],fluentd:[29,31,32],flush_timeout:29,foo:35,forma:25,framework:[9,10],freez:[12,17],freezabl:[12,13,17],frent:31,from:[6,14,23,27,29,31,32,34,35],frozen:17,funciona:10,functool:27,further:[12,14],futur:12,gener:[3,12,13,14],gerado:[9,10,31],geral:[9,31],gerenciador:[30,33],get:[12,14,21,27,31],get_authenticated_us:27,get_connect:12,get_connection_for_rout:12,get_event_loop:35,github:10,given:12,glob:[],globai:26,guest:[29,31,32],guia:10,handl:[12,14,29],handlar:25,handler:[10,12,16,17,24,26,29,30,31,32],handler_error:[12,14],handnler:[],happen:12,header:27,heartbeat:14,hello:31,hook:[1,10,24,30],host:[12,14,29,31,32],hostnam:29,html:27,http:[10,12,17,25,28,30],http_client:[12,20],http_handler_wrapp:12,http_rout:12,httpclientcontext:[12,20],httpm:[],httprout:12,httpserver:[12,18],httpstatu:27,ideia:31,identifi:14,immedi:[12,13,14],implement:[12,14,17],implementa:[],inclus:26,incompatibilidad:[8,10],indeterminado:[9,10],index:[10,31],indica:[16,29],individualment:30,info:32,inicializada:23,init_redi:23,initi:[12,14],injetado:26,inner:27,insert:1,insert_user_into_type_registri:[],insid:12,inspirado:[],instanc:[12,14],instancia:27,inteiro:29,interv:[12,19],intervalo:[10,30,33],invalid:[12,15],invalidconnect:[12,15],invalidmessagesizeexcept:14,invalidrout:[12,15],is_connect:14,is_empti:12,is_ful:12,isn:14,isso:[8,9,10,25,26,27,28,29,31,32,35],issu:[1,9],item:[12,13],iten:[],iter:[12,13,25],json:[14,31],json_respons:[27,31],jsonqueu:[12,13,14],junto:27,keep:[12,13],keep_runnig:[12,19],kei:[12,13,14,29],keyerror:35,kwarg:[1,12,14,17,25,35],latest:[],lembrar:26,len:31,lendo:30,levantada:35,liberar:29,licens:5,like:[12,29],linha:31,list:[12,13,17,19,29,32],lista:[25,27,28,29,31],localhost:23,lock:17,log:[9,14,31],log_callback:35,logger:[14,32],longo:26,loop:[8,9,12,14,23,31,35],los:[26,27],lote:32,mai:[2,10,12,14,30,31],main:[12,13,31,35],maior:9,mandatori:[12,13,14],manter:[23,26],map:[12,13],marca:[16,29],marcar:35,martiusweb:[],mas:[27,29,32],max_concurr:12,max_message_length:14,melhorar:1,menor:29,mensagem:[1,10,16,25,28,29,31,32],mensagen:[28,29,31,32],mensgem:30,mesma:35,mesmo:[25,28,29,31,35],messag:[12,22,26,29,31,32,35],messageerror:[12,14],meth:[],method:[1,17,27,31],microframework:[],min:29,missingtypeannotationerror:21,model:[12,27,32],modelo:29,modul:[1,10,22],momento:[27,29],mostrar:31,mostraremo:27,move:1,msg:[12,14,29],mudam:28,mudando:2,mudar:32,mudo:32,mudou:32,muita:35,muito:9,multipl:3,mutablemap:12,my_handler_decor:27,myapp:34,myproject:27,mywork:31,nada:29,name:[12,13,14,17,31,35],nao:1,nas:[],necessariament:25,necessidad:23,necessita:29,necessitam:23,need:14,nem:29,nenhuma:29,ness:[25,29,31,34],nessa:32,nome:[26,29],non_persist:14,none:[12,13,14,19,21,25,35],nos:26,nossa:25,notif:14,nova:[24,28,29,30],novo:[8,9],obj:21,object:[12,13,14,16,17,18,19,20,21,35],objetivo:[9,10],objeto:[25,27,29,31,32,34],obtain:6,occur:12,on_before_start_consumpt:[12,14],on_connect:19,on_connection_error:[12,14,19],on_consumption_start:[12,14],on_error:14,on_ev:19,on_except:[12,16,19,29],on_excpt:[],on_message_handle_error:[12,14],on_queue_error:12,on_queue_messag:[12,14],on_shutdown:23,on_startup:[12,23],on_success:[12,16,29],onc:[12,14],ond:[25,29,30],one:14,opcionalment:29,option:[6,13,14,16,21,22,25,31],org:27,origem:[25,28],origen:[9,10,25],origin:[16,29,32],original_queu:29,orign:9,other:29,outra:29,outro:[25,29],overwritten:[12,14],owner:17,packag:22,page:10,para:[2,4,8,9,10,11,16,23,25,26,30,31,32,35],param:14,param_typ:21,paramet:[6,12,14],parametro:[16,25,27,28,30],part:[],partir:32,pass:[29,32],passa:[27,32],passada:29,passado:[27,29],passar:27,passarmo:29,password:[12,14,19,29,31,32],path:[25,27],payload:14,pegando:27,pegar:29,pelo:[9,26,27,29,31],permit:[23,27,34],permitido:27,persist:14,persistent:23,plan:31,pode:[27,28,29,32,35],podem:[9,10,25],podemo:[26,27,28,29],poder:29,poderem:31,poderia:27,ponto:[25,29,31],pop_al:12,popular:27,por:[8,9,10,23,25,27,28,29,32],porqu:28,porta:30,posicion:[],posit:1,possa:27,possibilidad:32,possuem:29,possui:29,posui:34,pra:29,prametro:27,precisa:[8,29],precisam:31,precisamo:[23,29],precisar:32,precisarmo:27,preciso:[27,29],prefetch_count:[12,14,29,31,32],prefretch:29,presa:29,primeiro:25,princip:[10,24,27,29,30],print:[29,31,34,35],printit:35,problema:9,process_except:16,process_success:16,processado:[],processar:29,processed_messag:26,processo:23,projeto:[2,9,11],properti:[12,13,14,16,17],provid:14,publica:29,publicada:29,publish:14,puder:27,put:[12,13,14,29],pydant:[2,4,12,13,29],python:[6,9,10],qenumer:[],quaisquer:[25,27],qual:[25,30],qualquer:[9,10],quando:[1,27,28,29,31],que:[8,9,10,23,25,26,28,29,30,31,32,34],queira:29,quem:[25,27],queo:[],quer:29,queremo:35,queria:[],queue:[12,13,22,29,35],queue_nam:[12,14],queueconsumerdeleg:[12,14],rabbit:[],rabbitmq:[10,12,17,22,25,28,30,32],rabbitmqmessag:[12,16,29,32],rabitmq:29,rais:[12,14,35],random:14,raw:[3,4,5,6,12],readi:[12,14],readthedoc:[],realizar:29,receb:[25,27,28,29,31,32,35],receba:[9,10,27],recebam:29,recebem:30,recebemo:27,recebendo:[29,30],recebida:30,recebido:29,receiv:[12,17,31],recolocada:[16,29],recomendamo:26,reconectar:31,recorrent:10,redi:23,ref:[],regist:[12,13,17],registr:23,registra:25,registrada:25,registrado:28,registrando:25,registrar:25,registri:27,regra:27,reject:[12,14,16,29,31,32],rejeitada:[16,29],rejeitar:29,remov:1,report:1,representa:[23,25],representara:[],req:[27,31],request:[12,25,28,30,31],requeu:[12,14,16,29,31],resolve_param:21,respectivament:27,respons:[12,13,27,31],retorna:27,retornada:27,retornar:32,rodada:34,rodado:[2,8,31],rodando:[10,23,30,33],rodar:[29,31],rodarem:23,rode:[9,10],rota:[25,29,31],rout:[1,6,14,15,22,25,26,30,31,32,35],route_for:[1,12],route_info:[12,19],route_typ:[12,13],routedef:12,routesregistri:[1,12],routetyp:[12,13,25,26,27,29,31,32,35],routing_kei:[12,13,14,29],run:[12,23,25,31,34],run_everi:[12,34],run_every_max_concurr:12,run_on_shutdown:[12,24,30],run_on_startup:[1,12,24,30],run_until_complet:35,runner:8,saber:25,schedul:12,scheduledtaskrunn:12,search:10,second:12,seconds_between_conn_retri:14,seguint:[25,27,29,31],segundo:29,seja:[9,25,27,29,31,34,35],sejam:[25,26],sem:[29,31,32],sempr:[27,29,31],send:[14,17],sendo:[2,8,9,27],ser:[2,9,10,16,23,25,27,28,29,31,32],seria:31,serial:14,serializ:14,serialized_data:[12,13,14,16],server:[10,30],servidor:[10,29,31],set:[12,21,27],set_connect:[12,13],setup:[2,4],seu:[8,9,25,26,27,28,29,30],should:[12,14],shudtdown:[10,24,30],shutdown:[12,18],shutdown_os_sign:12,side:[10,30],sigint:12,signal:[12,13,22],signalhandl:18,significa:[9,29],significado:25,sigterm:12,simpl:27,simplesmet:27,sinaliza:23,singleton:26,size:12,sleep:[12,35],sobr:[10,24,27,30,31],someth:12,sourc:[12,13,14,15,16,17,18,19,20,21,25,29],sphinx:[1,6],sse:[12,17,22,31,32],sse_conn:31,sse_rout:12,sseapplic:[],sseconnect:[12,13,31],sseconsum:19,ssemessag:19,sserout:12,stabl:27,stage:[12,14],start:[12,14,19],startup:[10,12,18,24,30],state:19,statu:27,status_update_ev:31,stop:[12,14],stop_consum:14,str:[12,13,14,19,25],stream:[],string:[],structur:6,sua:[8,9,10,23,24,29,30,31],subclass:[12,13],submodul:22,subpackag:22,substitui:9,sucesso:[27,29],suficient:27,suport:[],suporta:28,tag:[1,2,3,4,5,6,14],take:17,tamanho:29,task:[12,31],task_runn:22,taskid:31,taskstatu:31,teham:29,tem:[9,10,25,27,29],temo:[25,27,29],tempo:[9,10,28,29,30,33,35],tentanto:31,ter:[8,29,35],test:[2,7,10,22],testcas:[],text:[],tha:17,tick:12,time:[14,22,35],timeit:[10,12,30,33],tipo:[10,25,27,29,30],titlesonli:[],tiver:[],tivermo:29,toda:[26,27,29],todo:[9,25,27,29],tomada:29,topo:27,tornamo:32,tornando:26,total:35,traceback:35,track:[12,13],transact:[12,35],transactions_kei:12,tratada:[9,29],tratamento:29,trigger:[12,14],tudo:10,type:[12,13,14,19,25,26,27,29,31,32,35],type_definit:21,typehint:27,types_registri:27,typesregistri:[21,27],uma:[1,10,23,24,26,27,28,30,33,35],unauthor:27,uncaught:[12,14],undecodablemessageexcept:14,union:[12,13,14,19],unpars:12,updat:6,url:[19,31],usa:29,usada:[25,29],usado:[25,29],usag:[12,13],usam:9,usamo:23,usando:31,usar:[9,27],use:17,use_default_loop:8,used:[12,14],user:[27,29,31,32],userdict:12,userlist:17,usernam:[12,14,19,29],using:17,uso:[10,23,32],util:[22,26,35],utilizado:26,utilizando:23,utilizar:[26,35],vai:29,vale:26,valid:[12,14],validate_method:12,valu:[12,13],valueerror:[12,14,15],veja:27,vejamo:27,vem:27,ver:28,version:[27,35],vez:[2,29],veze:35,vhost:[12,13,29,31,32,35],via:9,vida:[9,23,26],virtual:[12,13,29],virtual_host:14,wait:12,wait_clos:23,wait_for_data:19,web:[27,31],web_request:12,web_routedef:12,when:[12,14],which:17,wiki:[],wikipedia:[],with_typ:[12,13],words_to_index:26,worker:[9,10,23,30],world:31,wrap:[21,27],xablau:[29,35],xena:29,xxxxxxxxxxxxx:12},titles:["Changelog","0.10.0","0.10.1","0.11.0","0.11.1","0.11.2","0.11.3","Guia de desenvolvimento","Escrevendo Testes Unit\u00e1rios","Incompatibilidades","Bem vindos \u00e0 documenta\u00e7\u00e3o oficial do projeto Asyncworker","Introdu\u00e7\u00e3o","asyncworker package","asyncworker.connections package","asyncworker.easyqueue package","asyncworker.exceptions package","asyncworker.rabbitmq package","asyncworker.signals package","asyncworker.signals.handlers package","asyncworker.sse package","asyncworker.testing package","asyncworker.types package","asyncworker","Hooks de startup e shudtdown","Asyncworker App","Sobre a classe principal App","Compartilhamento de dados e inicializa\u00e7\u00f5es ass\u00edncronas","HTTP","Tipos de Handlers","RabbitMQ","Guia de uso","In\u00edcio r\u00e1pido","Atualizando sua App Asyncworker","Utilit\u00e1rios","Rodando uma fun\u00e7\u00e3o em um intervalo fixo de tempo","Timeit"],titleterms:{"a\u00e7\u00e3o":29,"ass\u00edncrona":26,"atrav\u00e9":31,"c\u00f3digo":29,"class":25,"documenta\u00e7\u00e3o":10,"estar\u00e1":27,"fun\u00e7\u00e3o":34,"in\u00edcio":31,"inicializa\u00e7\u00f5":26,"introdu\u00e7\u00e3o":11,"m\u00faltipla":35,"parametriza\u00e7\u00e3o":27,"prop\u00f3sito":[],"r\u00e1pido":31,"requisi\u00e7\u00f5":31,"ser\u00e1":29,"transa\u00e7\u00f5":35,"unit\u00e1rio":8,"utilit\u00e1rio":33,adicionai:29,amqpconnect:29,apena:27,aplicando:27,app:[12,23,24,25,26,32],armazenando:26,asyncwork:[10,12,13,14,15,16,17,18,19,20,21,22,24,25,32],atualizando:32,backend:[],base:[17,18],bem:10,bucket:12,bulk_siz:29,cada:29,campo:29,changelog:0,compartilhamento:26,completo:29,conf:12,connect:[12,13,14],consum:[12,19],consumindo:31,content:[12,13,14,15,16,17,18,19,20,21],contexto:35,criando:25,customizado:27,dada:29,dado:[26,31],decor:[27,29,35],definindo:25,desenvolvimento:7,easyqueu:14,endpoint:31,env:27,escolh:27,escolhendo:29,escrevendo:8,escutando:27,event:31,except:[12,14,15],exemplo:29,fila:31,fixo:34,flush:29,gerenciador:35,guia:[7,30],handler:[18,25,27,28],hook:23,http:[18,27,31],incompatibilidad:9,indic:10,individualment:29,intervalo:34,lendo:31,mai:[27,29],mensgem:29,messag:[14,16,19],modul:[12,13,14,15,16,17,18,19,20,21],nota:29,nova:25,ofici:10,ond:27,option:[12,29],packag:[12,13,14,15,16,17,18,19,20,21],para:[27,29],parametro:29,porta:27,prefetch:29,princip:25,projeto:10,qual:29,que:27,queue:14,rabbitmq:[16,18,29,31],recebem:27,recebendo:31,recebida:29,registri:21,request:27,resolv:21,rodando:[31,34],rout:[12,27,29],run_on_shutdown:23,run_on_startup:23,server:[27,31],seu:31,shudtdown:23,side:31,signal:[17,18],sobr:[25,29],sse:[18,19],startup:23,sua:[25,32],submodul:[12,14,16,17,18,19,21],subpackag:[12,17],tabl:10,task_runn:12,tempo:34,test:[8,12,20],time:12,timeit:35,timeout:29,tipo:28,type:21,uma:[25,29,31,34],uso:30,util:12,valor:29,vindo:10,worker:31}})