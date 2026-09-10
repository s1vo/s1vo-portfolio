"""Generates static HTML screens for product screenshots. Run: python3 tools/mockups/build.py, then screenshot out/*.html at 1440x900."""
import os, math, random
OUT = os.path.join(os.path.dirname(__file__), 'out')
CSS = """
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{--bg:#1e1f1c;--side:#181917;--panel:#262824;--panel2:#2e302c;--line:#3a3d38;--line2:#30322e;--text:#f1efe9;--muted:#9c9e96;--dim:#6f716a;--accent:#f45124;--on-accent:#fff;--code-bg:#151614;--code-text:#c9cbc3;--font:Manrope;--brand-r:7px;--green:#3ccb7f;--yellow:#e9b949;--red:#ff5f57;--blue:#5aa9ff;--purple:#b48cff}
*{box-sizing:border-box}
body{margin:0;width:1440px;height:900px;overflow:hidden;background:var(--bg);color:var(--text);font:13px/1.45 var(--font),system-ui,sans-serif;display:grid;grid-template-columns:224px 1fr;grid-template-rows:54px 1fr;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.side{grid-row:1/3;background:var(--side);border-right:1px solid var(--line);padding:18px 14px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:10px;font-weight:800;font-size:16px;padding:0 8px;margin-bottom:22px;letter-spacing:-.01em}
.brand i{width:26px;height:26px;border-radius:var(--brand-r);background:var(--accent);display:inline-block;position:relative}
.brand i::after{content:"";position:absolute;inset:8px;border-radius:2px;background:#fff;opacity:.9}
.brand small{font-weight:600;color:var(--dim);font-size:11px;margin-left:auto}
.nav a{display:flex;gap:10px;align-items:center;padding:8px 10px;border-radius:7px;color:var(--muted);font-weight:600}
.nav a.on{background:var(--panel2);color:var(--text)}
.nav a b{width:14px;height:14px;border-radius:4px;border:1.5px solid currentColor;opacity:.7;display:inline-block}
.nav a .n{margin-left:auto;font-size:11px;color:var(--dim)}
.nav .sec{margin:18px 10px 6px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--dim);font-weight:700}
.user{margin-top:auto;display:flex;gap:10px;align-items:center;padding:10px;border-top:1px solid var(--line);color:var(--muted);font-weight:600}
.user i{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#f45124,#b48cff);display:inline-block}
.top{display:flex;align-items:center;gap:14px;padding:0 24px;border-bottom:1px solid var(--line)}
.top h1{font-size:15px;margin:0;font-weight:700}
.crumb{color:var(--dim);font-weight:600}.crumb b{color:var(--muted);font-weight:600}
.top .sp{flex:1}
.search{width:260px;padding:7px 12px;border-radius:7px;background:var(--panel);border:1px solid var(--line);color:var(--dim);font-weight:500}
.main{padding:20px 24px;overflow:hidden;min-width:0;display:flex;flex-direction:column;gap:14px}
.row{display:flex;gap:14px;align-items:center}
.grid{display:grid;gap:14px}.grid>*,.row>*{min-width:0}
.card{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:16px;min-width:0}
.card h3{margin:0 0 12px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);font-weight:700;display:flex;align-items:center;gap:8px}
.card h3 .sp{flex:1}
.kpi{font-size:28px;font-weight:800;letter-spacing:-.03em;line-height:1}
.kpi small{font-size:12px;color:var(--muted);font-weight:600;margin-left:6px;letter-spacing:0}
.sub{color:var(--muted);font-size:12px;margin-top:6px}
.bar{height:6px;background:var(--line);border-radius:3px;overflow:hidden;margin-top:8px}.bar i{display:block;height:100%;background:var(--accent);border-radius:3px}
.bar i.g{background:var(--green)}.bar i.y{background:var(--yellow)}.bar i.r{background:var(--red)}.bar i.b{background:var(--blue)}
table{width:100%;border-collapse:collapse;font-size:12.5px}
th{text-align:left;font-size:11px;color:var(--dim);font-weight:700;padding:6px 10px;border-bottom:1px solid var(--line);letter-spacing:.04em}
td{padding:9px 10px;border-bottom:1px solid var(--line2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
tr:last-child td{border-bottom:0}
.dot{display:inline-block;width:8px;height:8px;border-radius:50%;margin-right:7px;vertical-align:1px;background:var(--muted)}
.dot.g{background:var(--green)}.dot.y{background:var(--yellow)}.dot.r{background:var(--red)}.dot.b{background:var(--blue)}.dot.a{background:var(--accent)}
.tag{display:inline-block;padding:2px 8px;border-radius:6px;background:var(--panel2);border:1px solid var(--line);font-size:11px;color:var(--muted);font-weight:600;margin-right:4px}
.tag.g{color:var(--green);border-color:#2f5a44}.tag.r{color:var(--red);border-color:#5c3634}.tag.y{color:var(--yellow);border-color:#5c5030}.tag.a{color:var(--accent);border-color:#6b3020}.tag.b{color:var(--blue);border-color:#2f4a6b}
.btn{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;border-radius:7px;background:var(--panel2);border:1px solid var(--line);font-weight:700;font-size:12px;white-space:nowrap}
.btn.p{background:var(--accent);border-color:var(--accent);color:var(--on-accent)}
.btn.ghost{background:transparent}
.log{font:12px/1.65 "JetBrains Mono",ui-monospace,Menlo,monospace;background:var(--code-bg);border:1px solid var(--line);border-radius:8px;padding:12px 14px;color:var(--code-text);white-space:pre;overflow:hidden;flex:1}
.mono{font-family:"JetBrains Mono",ui-monospace,Menlo,monospace;font-size:12px}
.g{color:var(--green)}.y{color:var(--yellow)}.r{color:var(--red)}.b{color:var(--blue)}.a{color:var(--accent)}.p{color:var(--purple)}.m{color:var(--muted)}.d{color:var(--dim)}
.tabs{display:flex;gap:4px;border-bottom:1px solid var(--line);margin-bottom:12px}
.tabs span{padding:6px 12px;color:var(--muted);font-weight:600;font-size:12px}
.tabs span.on{color:var(--text);border-bottom:2px solid var(--accent);margin-bottom:-1px}
.list{display:flex;flex-direction:column}
.list > div{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--line2)}
.list > div:last-child{border-bottom:0}
.list .sp{flex:1}
.fill{flex:1;min-height:0}
svg.spark{display:block}
.kbd{font:11px "JetBrains Mono",monospace;background:var(--code-bg);border:1px solid var(--line);border-radius:4px;padding:1px 5px;color:var(--muted)}
.tree div{padding:5px 8px;color:var(--muted);font-weight:600;border-radius:6px}
.tree div.on{background:var(--panel2);color:var(--text)}
.tree .i1{padding-left:24px}.tree .i2{padding-left:40px}
.av{display:inline-block;width:22px;height:22px;border-radius:50%;vertical-align:middle;margin-left:-6px;border:2px solid var(--panel)}
.field{display:flex;flex-direction:column;gap:4px;min-width:0;font-size:11px;color:var(--muted);font-weight:700;letter-spacing:.04em;text-transform:uppercase}
.field span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:8px 10px;border-radius:7px;background:var(--code-bg);border:1px solid var(--line);color:var(--text);font-weight:500;font-size:13px;letter-spacing:0;text-transform:none}
body.top-layout{grid-template-columns:minmax(0,1fr);grid-template-rows:56px 1fr}
body.top-layout .top{background:var(--side);gap:22px}
body.top-layout .brand{margin:0;padding:0;margin-right:10px}
.hnav{display:flex;gap:4px}.hnav a{white-space:nowrap;padding:7px 12px;border-radius:7px;color:var(--muted);font-weight:600}.hnav a.on{color:var(--text);background:var(--panel2)}
.pagehead{display:flex;align-items:center;gap:12px}.pagehead h1{font-size:20px;margin:0;font-weight:800;letter-spacing:-.01em}
</style>
"""

def spark(vals, w=180, h=36, color='var(--accent)', fill=True):
    mx, mn = max(vals), min(vals)
    pts = [(i * w / (len(vals) - 1), h - 4 - (v - mn) / (mx - mn or 1) * (h - 8)) for i, v in enumerate(vals)]
    line = ' '.join(f'{x:.1f},{y:.1f}' for x, y in pts)
    area = f'M0,{h} L{line.replace(" ", " L")} L{w},{h} Z'
    f = f'<path d="{area}" fill="{color}" opacity=".12"/>' if fill else ''
    return f'<svg class="spark" width="{w}" height="{h}" viewBox="0 0 {w} {h}">{f}<polyline points="{line}" fill="none" stroke="{color}" stroke-width="1.6" stroke-linejoin="round"/></svg>'

def rnd(seed, n, lo, hi):
    r = random.Random(seed); return [r.uniform(lo, hi) for _ in range(n)]

THEMES = {
 'nexus':    dict(),
 'forge':    dict(bg='#0e0f12',side='#0a0b0d',panel='#15171b',panel2='#1d2025',line='#262a31',line2='#1f2328',text='#e8eaf0',muted='#8a90a0',dim='#5c6270',accent='#4f8cff',code='#0a0b0d',codet='#c3c8d4',font='IBM Plex Sans',br='4px'),
 'vault':    dict(bg='#f6f4ef',side='#ffffff',panel='#ffffff',panel2='#f1eee7',line='#e4e0d6',line2='#ebe8e0',text='#1c1b18',muted='#6b6960',dim='#9c9a92',accent='#1f8a5b',code='#f1eee7',codet='#2b2a26',font='Inter',br='50%'),
 'pulse':    dict(bg='#0f1420',side='#0b0f19',panel='#161c2b',panel2='#1d2436',line='#273049',line2='#202940',text='#e6eaf5',muted='#8f98b3',dim='#5f6883',accent='#22d3ee',onacc='#06202a',code='#0b0f19',codet='#c5cbe0',font='Space Grotesk',br='50%'),
 'flow':     dict(bg='#f3f4f7',side='#ffffff',panel='#ffffff',panel2='#eef0f5',line='#e1e4ec',line2='#e8eaf0',text='#17181c',muted='#5f6470',dim='#9a9fab',accent='#7c5cff',code='#f6f7fa',codet='#23252b',font='Inter',br='10px'),
 'mesh':     dict(bg='#1a1e24',side='#141821',panel='#21262e',panel2='#2a303a',line='#343b47',line2='#2b323d',text='#e9edf2',muted='#98a2b3',dim='#66707f',accent='#2dd4bf',onacc='#062a26',code='#141821',codet='#c6ccd6',font='Manrope',br='4px'),
 'drop':     dict(bg='#ffffff',side='#f7f8fa',panel='#ffffff',panel2='#f2f4f7',line='#e6e8ec',line2='#eceef2',text='#1a1c20',muted='#646a75',dim='#9aa0aa',accent='#2f6bff',code='#f2f4f7',codet='#22252b',font='Inter',br='8px'),
 'relay':    dict(bg='#17131f',side='#120f19',panel='#1f1a29',panel2='#282234',line='#372f47',line2='#2c2539',text='#f0ecf7',muted='#a094b5',dim='#6e6482',accent='#ff4f9a',code='#120f19',codet='#d2c9e2',font='Space Grotesk',br='50%'),
 'querylab': dict(bg='#121417',side='#0d0f11',panel='#191c20',panel2='#21252a',line='#2b3036',line2='#22262b',text='#e6e8eb',muted='#8b929b',dim='#5d646d',accent='#f5b942',onacc='#1a1200',code='#0d0f11',codet='#cfd3d8',font='IBM Plex Sans',br='3px'),
 'workspace':dict(bg='#faf8f4',side='#ffffff',panel='#ffffff',panel2='#f3f0ea',line='#e6e2d9',line2='#ece8e0',text='#1d1b17',muted='#6a665d',dim='#a19c92',accent='#4f46e5',code='#f3f0ea',codet='#2a2823',font='Manrope',br='7px'),
}
LAYOUT = {'forge':'top','pulse':'top','relay':'top','workspace':'top'}
def theme_style(t):
    m={'bg':'--bg','side':'--side','panel':'--panel','panel2':'--panel2','line':'--line','line2':'--line2','text':'--text','muted':'--muted','dim':'--dim','accent':'--accent','onacc':'--on-accent','code':'--code-bg','codet':'--code-text','br':'--brand-r'}
    parts=[f"{m[k]}:{v}" for k,v in t.items() if k in m]
    if 'font' in t: parts.append(f"--font:'{t['font']}'")
    return ';'.join(parts)

def shell(name, tagline, nav, title, crumb, body, right_top=''):
    key = name.lower()
    t = THEMES.get(key, {}); layout = LAYOUT.get(key, 'side')
    navh = ''
    for item in nav:
        if isinstance(item, str):
            if layout == 'side': navh += f'<div class="sec">{item}</div>'
        else:
            label, on, n = (item + (False, ''))[:3] if len(item) < 3 else item
            if layout == 'side':
                navh += f'<a class="{"on" if on else ""}"><b></b>{label}{f"<span class=n>{n}</span>" if n else ""}</a>'
            else:
                navh += f'<a class="{"on" if on else ""}">{label}</a>'
    style = theme_style(t)
    if layout == 'side':
        chrome = f'<aside class="side"><div class="brand"><i></i>{name}<small>{tagline}</small></div><nav class="nav">{navh}</nav><div class="user"><i></i>Михаил С.<span class="n" style="margin-left:auto;color:var(--dim)">Owner</span></div></aside><header class="top"><span class="crumb">{crumb}</span><h1>{title}</h1><span class="sp"></span>{right_top}</header>'
        head = ''
    else:
        chrome = f'<header class="top"><div class="brand"><i></i>{name}<small>{tagline}</small></div><nav class="hnav">{navh}</nav><span class="sp"></span>{right_top}<span class="user" style="border:0;padding:0 0 0 10px;margin:0"><i></i></span></header>'
        head = f'<div class="pagehead"><span class="crumb">{crumb}</span><h1>{title}</h1></div>'
    return f'''<!doctype html><html lang="ru" style="{style}"><head><meta charset="utf-8"><title>{name}</title>{CSS}</head><body class="{layout}-layout">
{chrome}
<main class="main">{head}{body}</main></body></html>'''

def write(fn, html):
    open(os.path.join(OUT, fn + '.html'), 'w').write(html)

# ---------- 1. Nexus ----------
servers = [('prod-api-01','10.0.1.12','g',62,71,48,'Ubuntu 22.04','14 контейнеров'),('prod-api-02','10.0.1.13','g',48,64,44,'Ubuntu 22.04','14 контейнеров'),('prod-db-01','10.0.2.20','y',83,88,71,'Debian 12','3 контейнера'),('staging-01','10.0.5.8','g',21,39,35,'Ubuntu 24.04','9 контейнеров'),('worker-01','10.0.3.4','r',97,92,58,'Ubuntu 22.04','6 контейнеров')]
rows = ''.join(f'<tr><td><span class="dot {s}"></span><b>{n}</b><div class="d mono" style="font-size:11px">{ip} · {os_}</div></td><td>{c}</td><td style="width:130px"><div class="mono d" style="font-size:11px">CPU {cpu}%</div><div class="bar"><i class="{"r" if cpu>90 else "y" if cpu>75 else "g"}" style="width:{cpu}%"></i></div></td><td style="width:130px"><div class="mono d" style="font-size:11px">RAM {ram}%</div><div class="bar"><i class="{"r" if ram>90 else "y" if ram>75 else "b"}" style="width:{ram}%"></i></div></td><td style="width:130px"><div class="mono d" style="font-size:11px">Disk {dk}%</div><div class="bar"><i style="width:{dk}%;background:var(--muted)"></i></div></td><td><span class="btn ghost">Рестарт</span></td></tr>' for n,ip,s,cpu,ram,dk,os_,c in servers)
containers = [('nginx-edge','nginx:1.27','g','Up 12d','0.4%','48 MB'),('api-gateway','nexus/api:2.14.0','g','Up 3d','12.1%','412 MB'),('auth-service','nexus/auth:1.9.2','g','Up 3d','3.8%','196 MB'),('rabbitmq','rabbitmq:3.13','g','Up 12d','6.2%','310 MB'),('postgres-primary','postgres:16','y','Up 41d','38.5%','2.9 GB'),('report-worker','nexus/worker:2.14.0','r','Restarting (1)','—','—')]
crows = ''.join(f'<tr><td><span class="dot {s}"></span><b>{n}</b></td><td class="mono d">{img}</td><td class="{ "r" if s=="r" else "m"}">{up}</td><td class="mono">{cpu}</td><td class="mono">{mem}</td></tr>' for n,img,s,up,cpu,mem in containers)
log = '''<span class=d>14:02:11.204</span> <span class=g>INFO</span>  api-gateway   GET /v1/servers 200 12ms
<span class=d>14:02:11.310</span> <span class=g>INFO</span>  auth-service  token refreshed user=42
<span class=d>14:02:12.008</span> <span class=y>WARN</span>  postgres      checkpoint took 4.2s (threshold 3s)
<span class=d>14:02:12.551</span> <span class=g>INFO</span>  api-gateway   POST /v1/containers/report-worker/restart 202
<span class=d>14:02:13.117</span> <span class=r>ERROR</span> report-worker  ECONNREFUSED rabbitmq:5672 — retry 1/5 in 2s
<span class=d>14:02:15.120</span> <span class=g>INFO</span>  report-worker  connected to rabbitmq, consuming reports.build
<span class=d>14:02:15.402</span> <span class=g>INFO</span>  health        worker-01 → healthy (3/3 checks)
<span class=d>14:02:16.001</span> <span class=g>INFO</span>  api-gateway   GET /v1/metrics?range=1h 200 41ms'''
body = f'''
<div class="grid" style="grid-template-columns:repeat(4,1fr)">
 <div class="card"><h3>Серверы</h3><div class="kpi">5<small>из 5 онлайн</small></div>{spark(rnd(1,24,40,70),260,40,'var(--green)')}</div>
 <div class="card"><h3>Контейнеры</h3><div class="kpi">46<small>1 перезапускается</small></div>{spark(rnd(2,24,40,50),260,40,'var(--blue)')}</div>
 <div class="card"><h3>Средняя загрузка CPU</h3><div class="kpi">62%<small>за 15 мин</small></div>{spark(rnd(3,24,30,90),260,40)}</div>
 <div class="card"><h3>Алерты</h3><div class="kpi r">2<small>активных · 7 за сутки</small></div><div class="sub"><span class="tag r">worker-01 CPU &gt; 95%</span><span class="tag y">prod-db-01 disk 71%</span></div></div>
</div>
<div class="grid fill" style="grid-template-columns:1.35fr 1fr;min-height:0">
 <div style="display:flex;flex-direction:column;gap:14px;min-height:0">
  <div class="card"><h3>Серверы<span class="sp"></span><span class="tag">все регионы</span></h3><table><tr><th>Хост</th><th>Сервисы</th><th>CPU</th><th>RAM</th><th>Disk</th><th></th></tr>{rows}</table></div>
  <div class="card fill" style="display:flex;flex-direction:column"><h3>Realtime-логи<span class="sp"></span><span class="dot g"></span><span class="m">live</span></h3><div class="log">{log}</div></div>
 </div>
 <div class="card" style="display:flex;flex-direction:column"><h3>Docker-контейнеры · prod-api-01<span class="sp"></span><span class="btn">Health-check</span></h3><table style="table-layout:fixed"><colgroup><col style="width:32%"><col style="width:34%"><col style="width:16%"><col style="width:9%"><col style="width:9%"></colgroup><tr><th>Имя</th><th>Образ</th><th>Статус</th><th>CPU</th><th>Память</th></tr>{crows}</table>
 <h3 style="margin-top:18px">Health-check</h3><div class="list"><div><span class="dot g"></span>HTTP /health<span class="sp"></span><span class="mono m">200 · 8 ms</span></div><div><span class="dot g"></span>PostgreSQL<span class="sp"></span><span class="mono m">ok · 2 ms</span></div><div><span class="dot g"></span>RabbitMQ<span class="sp"></span><span class="mono m">ok · 4 ms</span></div><div><span class="dot y"></span>Disk free<span class="sp"></span><span class="mono y">29% · порог 30%</span></div></div></div>
</div>'''
write('nexus', shell('Nexus','control center',['Обзор',('Dashboard',True),('Серверы',False,'5'),('Контейнеры',False,'46'),('Логи',),('Алерты',False,'2'),'Настройки',('Интеграции',),('Команда',)],'Dashboard','Production <b>/</b>',body,'<span class="search">Поиск по хостам, контейнерам…</span><span class="btn">Последний час</span><span class="btn p">+ Сервер</span>'))

# ---------- 2. Forge ----------
deps = [('#482','main','f3a9c1e','Fix rate limiter for webhooks','g','Deployed','2м 14с','12 мин назад'),('#481','main','9b21d07','Bump nestjs to 10.4','g','Deployed','2м 41с','3 ч назад'),('#480','release/2.3','c07e5aa','Report export queue','y','Building','1м 03с','сейчас'),('#479','main','41d8f02','Hotfix: null session on refresh','r','Failed','0м 48с','вчера'),('#478','main','e12ab99','Add S3 backup job','g','Deployed','2м 30с','вчера'),('#477','develop','7f0c3b4','Migrate config to env schema','g','Deployed','2м 12с','2 дня назад')]
drows = ''.join(f'<tr><td class="mono d">{n}</td><td><span class="tag">{br}</span></td><td class="mono b">{sha}</td><td>{msg}</td><td><span class="dot {s}"></span>{st}</td><td class="mono m">{dur}</td><td class="d">{when}</td></tr>' for n,br,sha,msg,s,st,dur,when in deps)
blog = '''<span class=d>[00:00]</span> <span class=b>→</span> Cloning github.com/s1vo/nexus-api @ c07e5aa (release/2.3)
<span class=d>[00:02]</span> <span class=b>→</span> Detected Dockerfile · builder: docker/buildx
<span class=d>[00:02]</span> #1 [internal] load .dockerignore
<span class=d>[00:03]</span> #4 FROM node:22-alpine
<span class=d>[00:09]</span> #7 RUN npm ci --omit=dev              <span class=g>CACHED</span>
<span class=d>[00:10]</span> #8 COPY . .
<span class=d>[00:11]</span> #9 RUN npm run build
<span class=d>[00:52]</span> #9 ✓ nest build finished in 41.2s
<span class=d>[00:58]</span> #11 exporting layers → forge.local/nexus-api:482 <span class=g>done</span>
<span class=d>[01:01]</span> <span class=b>→</span> Pushing to registry (3 layers, 84 MB)
<span class=d>[01:03]</span> <span class=y>▍</span> Rolling update 2/3 replicas · health-check pending…'''
envs = [('DATABASE_URL','postgres://nexus:•••••@db:5432/nexus'),('RABBITMQ_URL','amqp://forge:•••••@mq:5672'),('JWT_SECRET','••••••••••••••••'),('S3_BUCKET','nexus-reports'),('NODE_ENV','production')]
erows = ''.join(f'<div><span class="mono a" style="font-size:11.5px">{k}</span><span class="sp"></span><span class="mono m" style="font-size:11.5px">{v}</span></div>' for k,v in envs)
body = f'''
<div class="row"><div class="card" style="flex:1"><h3>Приложение</h3><div class="kpi" style="font-size:20px">nexus-api<small>github.com/s1vo/nexus-api</small></div><div class="sub"><span class="tag g">production</span><span class="tag">staging</span><span class="tag">preview</span> · Nginx upstream <span class="mono">api.nexus.local</span></div></div>
 <div class="card" style="width:220px"><h3>Успешность сборок</h3><div class="kpi">97%<small>30 дней</small></div>{spark(rnd(7,20,80,100),180,34,'var(--green)')}</div>
 <div class="card" style="width:220px"><h3>Среднее время</h3><div class="kpi">2м 21с<small>build → deploy</small></div>{spark(rnd(8,20,110,170),180,34,'var(--blue)')}</div>
 <div class="card" style="width:220px"><h3>Очередь</h3><div class="kpi">1<small>активная · 0 ждут</small></div><div class="sub">RabbitMQ <span class="mono">builds.queue</span> · 3 воркера</div></div></div>
<div class="grid fill" style="grid-template-columns:1.3fr 1fr">
 <div class="card"><h3>Деплои<span class="sp"></span><span class="btn ghost">Rollback → #481</span><span class="btn p">Deploy main</span></h3><table style="table-layout:fixed"><colgroup><col style="width:8%"><col style="width:15%"><col style="width:12%"><col style="width:33%"><col style="width:14%"><col style="width:9%"><col style="width:9%"></colgroup><tr><th>#</th><th>Ветка</th><th>Коммит</th><th>Сообщение</th><th>Статус</th><th>Время</th><th></th></tr>{drows}</table></div>
 <div style="display:flex;flex-direction:column;gap:14px;min-height:0">
  <div class="card fill" style="display:flex;flex-direction:column"><h3>Лог сборки · #480<span class="sp"></span><span class="tag y">building</span></h3><div class="log">{blog}</div></div>
  <div class="card"><h3>Environment variables · production<span class="sp"></span><span class="btn ghost">+ Переменная</span></h3><div class="list">{erows}</div></div>
 </div>
</div>'''
write('forge', shell('Forge','deploy',['Проекты',('nexus-api',True),('nexus-web',),('pulse-monitor',),('relay-hub',),'Платформа',('Сборки',False,'1'),('Реестр образов',),('Воркеры',False,'3'),('Настройки',)],'nexus-api','Проекты <b>/</b>',body,'<span class="search">Поиск деплоев, коммитов…</span><span class="btn">release/2.3</span>'))

# ---------- 3. Vault ----------
entries = [('GitHub','s1vo','g',['work','dev']),('AWS Root','admin@company.io','y',['infra']),('PostgreSQL prod','nexus_admin','g',['infra','db']),('Cloudflare','ops@company.io','g',['infra','dns']),('Telegram Bot Token','@nexus_ops_bot','g',['bots']),('Figma','sivokonma@…','r',['design']),('Stripe','finance@company.io','g',['finance']),('VPN Office','msivokon','g',['office'])]
erows = ''.join(f'<div class="{"on" if i==2 else ""}" style="{"background:var(--panel2);border-radius:8px;padding:9px 10px;margin:0 -10px" if i==2 else ""}"><span class="dot {s}"></span><div><b>{n}</b><div class="m" style="font-size:11.5px">{u}</div></div><span class="sp"></span>{"".join(f"<span class=tag>{t}</span>" for t in tg)}</div>' for i,(n,u,s,tg) in enumerate(entries))
hist = [('Сегодня 12:40','Пароль изменён','вы'),('3 дня назад','Просмотр','вы · MacBook'),('2 нед. назад','Добавлен тег db','вы'),('1 мес. назад','Создано','вы')]
hrows = ''.join(f'<div><span class="d" style="width:120px">{t}</span><span>{a}</span><span class="sp"></span><span class="m">{w}</span></div>' for t,a,w in hist)
body = f'''
<div class="grid fill" style="grid-template-columns:200px 1fr 1.1fr">
 <div class="card"><h3>Папки</h3><div class="tree"><div class="on">Все записи <span class="d" style="float:right">128</span></div><div>Работа <span class="d" style="float:right">61</span></div><div class="i1">Инфраструктура</div><div class="i1">Сервисы</div><div>Личное <span class="d" style="float:right">40</span></div><div>Общие <span class="d" style="float:right">27</span></div></div><h3 style="margin-top:18px">Теги</h3><div><span class="tag">infra</span><span class="tag">dev</span><span class="tag">db</span><span class="tag">bots</span><span class="tag">finance</span><span class="tag">office</span></div>
 <h3 style="margin-top:18px">Безопасность</h3><div class="list"><div><span class="dot r"></span>Слабые<span class="sp"></span><span class="mono">3</span></div><div><span class="dot y"></span>Повторяются<span class="sp"></span><span class="mono">5</span></div><div><span class="dot g"></span>Без 2FA<span class="sp"></span><span class="mono">12</span></div></div></div>
 <div class="card"><h3>Записи<span class="sp"></span><span class="tag">по дате</span></h3><div class="list">{erows}</div></div>
 <div class="card" style="display:flex;flex-direction:column;gap:14px"><div class="row"><div><div class="kpi" style="font-size:22px">PostgreSQL prod</div><div class="sub">Работа / Инфраструктура · <span class="tag">infra</span><span class="tag">db</span></div></div><span class="sp"></span><span class="btn ghost">Поделиться</span><span class="btn p">Копировать</span></div>
  <div class="grid" style="grid-template-columns:1fr 1fr"><label class="field">Логин<span class="mono">nexus_admin</span></label><label class="field">Хост<span class="mono">db.internal:5432</span></label></div>
  <label class="field">Пароль<span class="mono">••••••••••••••••••••••••</span></label>
  <div class="row"><div class="sub" style="margin:0">Надёжность</div><div class="bar" style="flex:1;margin:0"><i class="g" style="width:92%"></i></div><span class="g" style="font-weight:700">Отличная · 128 бит</span></div>
  <div class="card" style="background:var(--panel2)"><h3>Генератор пароля<span class="sp"></span><span class="btn ghost" style="background:var(--panel)">Обновить</span></h3><div class="mono" style="font-size:15px;letter-spacing:.04em;margin-bottom:10px">Kq7#vR2p!mX9zL4wB&amp;nT8sD</div><div class="row" style="gap:8px"><span class="tag">24 символа</span><span class="tag g">A–Z</span><span class="tag g">a–z</span><span class="tag g">0–9</span><span class="tag g">#!&amp;</span></div></div>
  <div class="row"><span class="tag g">2FA включён · TOTP</span><span class="mono" style="font-size:18px;letter-spacing:.2em">482 913</span><span class="d">обновится через 18 с</span></div>
  <div><h3>История</h3><div class="list">{hrows}</div></div>
  <div class="d" style="font-size:11.5px">Зашифровано AES-256-GCM на клиенте · ключ не покидает устройство</div></div>
</div>'''
write('vault', shell('Vault','passwords',['Хранилище',('Все записи',True,'128'),('Избранное',False,'9'),('Общие',False,'27'),('Корзина',),'Инструменты',('Генератор',),('Аудит безопасности',False,'3'),('Импорт / экспорт',),('Настройки',)],'Все записи','Хранилище <b>/</b>',body,'<span class="search">Поиск · ⌘K</span><span class="btn">Заблокировать</span><span class="btn p">+ Запись</span>'))

# ---------- 4. Pulse ----------
mons = [('api.nexus.local','HTTPS','g',99.98,142,'62 дня'),('app.company.io','HTTPS','g',99.95,231,'41 день'),('auth.company.io','HTTPS','y',99.71,488,'12 дней'),('mq.internal','TCP 5672','g',100.0,3,'—'),('reports.company.io','HTTPS','r',96.40,1830,'8 дней'),('cdn.company.io','HTTPS','g',99.99,38,'204 дня')]
mrows = ''.join(f'<tr><td><span class="dot {s}"></span><b>{n}</b><div class="d mono" style="font-size:11px">{t} · каждые 30 с</div></td><td>{spark(rnd(i+20,30,lat*0.6,lat*1.4),160,30,"var(--red)" if s=="r" else "var(--yellow)" if s=="y" else "var(--green)",False)}</td><td class="mono">{up:.2f}%</td><td class="mono {"r" if lat>1000 else "y" if lat>400 else ""}">{lat} ms</td><td class="{"r" if ssl=="8 дней" else "y" if ssl=="12 дней" else "m"}">{ssl}</td></tr>' for i,(n,t,s,up,lat,ssl) in enumerate(mons))
inc = [('Открыт','reports.company.io','HTTP 502 · 3 из 3 регионов','r','14 мин'),('Решён','auth.company.io','Latency &gt; 400 ms','y','вчера · 22 мин'),('Решён','api.nexus.local','SSL продлён автоматически','g','3 дня назад'),('Решён','app.company.io','Timeout 30 s из eu-west','y','5 дней назад · 4 мин')]
irows = ''.join(f'<div><span class="tag {c}">{st}</span><div><b>{h}</b><div class="m" style="font-size:11.5px">{d}</div></div><span class="sp"></span><span class="d">{w}</span></div>' for st,h,d,c,w in inc)
body = f'''
<div class="grid" style="grid-template-columns:repeat(4,1fr)">
 <div class="card"><h3>Uptime · 30 дней</h3><div class="kpi">99.84%<small>6 мониторов</small></div>{spark(rnd(31,30,99.5,100),260,40,'var(--green)')}</div>
 <div class="card"><h3>Средняя задержка</h3><div class="kpi">184 ms<small>p95 · 612 ms</small></div>{spark(rnd(32,30,120,260),260,40,'var(--blue)')}</div>
 <div class="card"><h3>Инциденты</h3><div class="kpi r">1<small>открыт · 4 за неделю</small></div><div class="sub">MTTR 11 мин</div></div>
 <div class="card"><h3>SSL-сертификаты</h3><div class="kpi y">2<small>истекают &lt; 14 дней</small></div><div class="sub"><span class="tag r">reports · 8 дн.</span><span class="tag y">auth · 12 дн.</span></div></div>
</div>
<div class="grid fill" style="grid-template-columns:1.5fr 1fr">
 <div class="card"><h3>Мониторы<span class="sp"></span><span class="tag">3 региона</span></h3><table><tr><th>Цель</th><th>Задержка · 24 ч</th><th>Uptime</th><th>Latency</th><th>SSL</th></tr>{mrows}</table>
 <div class="card" style="margin-top:14px;background:var(--panel2)"><h3>Проверки по регионам · api.nexus.local</h3><div class="grid" style="grid-template-columns:repeat(3,1fr)"><div><span class="dot g"></span>eu-central<div class="mono m">138 ms</div></div><div><span class="dot g"></span>eu-west<div class="mono m">151 ms</div></div><div><span class="dot g"></span>ru-moscow<div class="mono m">96 ms</div></div></div></div></div>
 <div style="display:flex;flex-direction:column;gap:14px"><div class="card"><h3>Инциденты<span class="sp"></span><span class="btn ghost">Все</span></h3><div class="list">{irows}</div></div>
 <div class="card fill"><h3>Уведомления</h3><div class="list"><div><span class="dot g"></span>Webhook → Slack #ops<span class="sp"></span><span class="m">все инциденты</span></div><div><span class="dot g"></span>Email → ops@company.io<span class="sp"></span><span class="m">критичные</span></div><div><span class="dot g"></span>Telegram → @nexus_ops_bot<span class="sp"></span><span class="m">все инциденты</span></div><div><span class="dot"></span>PagerDuty<span class="sp"></span><span class="d">не подключён</span></div></div></div></div>
</div>'''
write('pulse', shell('Pulse','monitoring',['Мониторинг',('Обзор',True),('Мониторы',False,'6'),('Инциденты',False,'1'),('Статус-страница',),'Настройки',('Уведомления',),('Регионы',False,'3'),('API-ключи',)],'Обзор','Мониторинг <b>/</b>',body,'<span class="search">Поиск мониторов…</span><span class="btn">24 часа</span><span class="btn p">+ Монитор</span>'))

# ---------- 5. Flow ----------
resp = '''{
  <span class=b>"data"</span>: {
    <span class=b>"id"</span>: <span class=y>"srv_01J9ZK"</span>,
    <span class=b>"name"</span>: <span class=y>"prod-api-01"</span>,
    <span class=b>"status"</span>: <span class=y>"online"</span>,
    <span class=b>"metrics"</span>: { <span class=b>"cpu"</span>: <span class=a>62.4</span>, <span class=b>"ram"</span>: <span class=a>71.0</span>, <span class=b>"disk"</span>: <span class=a>48.2</span> },
    <span class=b>"containers"</span>: [
      { <span class=b>"name"</span>: <span class=y>"api-gateway"</span>, <span class=b>"state"</span>: <span class=y>"running"</span> },
      { <span class=b>"name"</span>: <span class=y>"auth-service"</span>, <span class=b>"state"</span>: <span class=y>"running"</span> }
    ]
  },
  <span class=b>"meta"</span>: { <span class=b>"requestId"</span>: <span class=y>"c1f3…9a"</span>, <span class=b>"took"</span>: <span class=a>12</span> }
}'''
hist = [('GET','/v1/servers/srv_01J9ZK','200','12 ms'),('POST','/v1/containers/restart','202','31 ms'),('GET','/v1/metrics?range=1h','200','41 ms'),('SOAP','GetObjectInfo','200','318 ms'),('PUT','/v1/servers/srv_01J9ZK','200','18 ms'),('GET','/v1/alerts','200','9 ms')]
hrows = ''.join(f'<div><span class="tag {"b" if m=="GET" else "g" if m in("POST","PUT") else "p"}" style="margin:0">{m}</span><span class="mono" style="font-size:11.5px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{p}</span><span class="mono g">{c}</span></div>' for m,p,c,t in hist)
body = f'''
<div class="grid fill" style="grid-template-columns:230px 1fr 1fr">
 <div class="card"><h3>Коллекции</h3><div class="tree"><div>Nexus API <span class="d" style="float:right">24</span></div><div class="i1">Servers</div><div class="i2 on">GET server by id</div><div class="i2">PUT update server</div><div class="i2">POST restart container</div><div class="i1">Metrics</div><div class="i1">Alerts</div><div>ГИС · SOAP <span class="d" style="float:right">7</span></div><div class="i1">GetObjectInfo</div><div class="i1">SearchObjects</div><div>Pulse API <span class="d" style="float:right">11</span></div></div>
 <h3 style="margin-top:18px">История</h3><div class="list" style="font-size:12px">{hrows}</div></div>
 <div class="card" style="display:flex;flex-direction:column;gap:12px"><div class="row"><span class="tag b" style="font-size:12px;padding:6px 10px">GET</span><span class="field" style="flex:1"><span class="mono">{{{{baseUrl}}}}/v1/servers/{{{{serverId}}}}</span></span><span class="btn p">Отправить</span></div>
  <div class="tabs"><span>Params</span><span>Auth</span><span class="on">Headers <span class="d">3</span></span><span>Body</span><span>Tests</span></div>
  <table><tr><th>Ключ</th><th>Значение</th></tr><tr><td class="mono">Authorization</td><td class="mono m">Bearer {{{{token}}}}</td></tr><tr><td class="mono">Accept</td><td class="mono m">application/json</td></tr><tr><td class="mono">X-Request-Id</td><td class="mono m">{{{{$uuid}}}}</td></tr></table>
  <div class="card" style="background:var(--panel2);margin-top:auto"><h3>Environment · production<span class="sp"></span><span class="tag g">активно</span></h3><div class="list" style="font-size:12px"><div><span class="mono a">baseUrl</span><span class="sp"></span><span class="mono m">https://api.nexus.local</span></div><div><span class="mono a">serverId</span><span class="sp"></span><span class="mono m">srv_01J9ZK</span></div><div><span class="mono a">token</span><span class="sp"></span><span class="mono m">•••••• (secret)</span></div></div></div>
  <div class="d" style="font-size:11.5px">Импортировано из OpenAPI 3.1 · nexus-api.yaml · 24 операции</div></div>
 <div class="card" style="display:flex;flex-direction:column"><h3>Ответ<span class="sp"></span><span class="tag g">200 OK</span><span class="tag">12 ms</span><span class="tag">1.2 KB</span></h3><div class="tabs"><span class="on">Body</span><span>Headers <span class="d">9</span></span><span>Cookies</span><span>Tests <span class="g">3/3</span></span></div><div class="log">{resp}</div></div>
</div>'''
write('flow', shell('Flow','api studio',['Рабочее пространство',('Коллекции',True,'3'),('Окружения',False,'2'),('История',),('Mock-сервер',),'Импорт',('OpenAPI / Swagger',),('WSDL',),('Настройки',)],'GET server by id','Nexus API <b>/</b> Servers <b>/</b>',body,'<span class="search">Поиск запросов…</span><span class="btn">production ▾</span><span class="btn">Сохранить</span>'))

# ---------- 6. Mesh ----------
def node(x,y,w,label,kind,color):
    icon = {'svc':'▣','db':'⛁','mq':'≋','ext':'◇','gw':'⇄'}[kind]
    return f'<g transform="translate({x},{y})"><rect width="{w}" height="56" rx="9" fill="#21262e" stroke="{color}" stroke-width="1.5"/><rect x="0" y="0" width="{w}" height="56" rx="9" fill="{color}" opacity=".07"/><text x="14" y="24" font-size="13" font-weight="700" fill="#f1efe9" font-family="Manrope">{label}</text><text x="14" y="42" font-size="11" fill="#9c9e96" font-family="Manrope">{ {"svc":"service","db":"database","mq":"queue","ext":"external","gw":"gateway"}[kind] }</text><text x="{w-22}" y="34" font-size="14" fill="{color}" font-family="Manrope">{icon}</text></g>'
def edge(x1,y1,x2,y2,label='',dash=False):
    mx = (x1+x2)/2
    d = f'M{x1},{y1} C{mx},{y1} {mx},{y2} {x2},{y2}'
    lab = f'<text x="{mx}" y="{(y1+y2)/2-6}" font-size="10.5" fill="#9c9e96" text-anchor="middle" font-family="JetBrains Mono, monospace">{label}</text>' if label else ''
    return f'<path d="{d}" fill="none" stroke="#6f716a" stroke-width="1.5" {"stroke-dasharray=6,5" if dash else ""} marker-end="url(#ar)"/>{lab}'
A,G,B,P,Y='#f45124','#3ccb7f','#5aa9ff','#b48cff','#e9b949'
canvas = f'''<svg width="100%" height="100%" viewBox="0 0 860 640" style="display:block"><defs><pattern id="gp" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#3a3d38"/></pattern><marker id="ar" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#6f716a"/></marker></defs><rect width="860" height="640" fill="url(#gp)"/>
{edge(200,88,300,168,'HTTPS')}{edge(200,88,300,248,'')}{edge(460,168,560,108,'SQL')}{edge(460,248,560,108,'SQL')}{edge(460,168,560,228,'publish')}{edge(460,248,560,228,'publish')}{edge(560,240,460,352,'consume')}{edge(460,368,560,488,'SOAP',True)}{edge(200,368,300,368,'REST')}{edge(460,368,560,108,'SQL')}
{node(40,60,160,'Web · Next.js','svc',B)}{node(300,140,160,'API Gateway','gw',A)}{node(300,220,160,'Auth Service','svc',A)}{node(560,80,160,'PostgreSQL','db',G)}{node(560,200,160,'RabbitMQ','mq',Y)}{node(300,340,160,'Report Worker','svc',A)}{node(40,340,160,'Telegram Bot','svc',B)}{node(560,460,160,'ГИС · внешняя','ext',P)}
<g transform="translate(300,140)"><rect x="-4" y="-4" width="168" height="64" rx="11" fill="none" stroke="{A}" stroke-width="1" stroke-dasharray="4,3" opacity=".8"/></g></svg>'''
body = f'''
<div class="grid fill" style="grid-template-columns:200px 1fr 300px">
 <div class="card"><h3>Слои</h3><div class="tree"><div class="on">Все компоненты <span class="d" style="float:right">8</span></div><div class="i1">Сервисы <span class="d" style="float:right">5</span></div><div class="i1">Базы данных <span class="d" style="float:right">1</span></div><div class="i1">Очереди <span class="d" style="float:right">1</span></div><div class="i1">Внешние <span class="d" style="float:right">1</span></div></div><h3 style="margin-top:18px">Палитра</h3><div class="list" style="font-size:12px"><div><span class="dot a"></span>Сервис</div><div><span class="dot g"></span>База данных</div><div><span class="dot y"></span>Очередь</div><div><span class="dot b"></span>Клиент</div><div><span class="dot" style="background:var(--purple)"></span>Внешняя система</div></div><h3 style="margin-top:18px">Экспорт</h3><div class="list" style="font-size:12px"><div>Markdown + Mermaid</div><div>PNG / SVG</div><div>OpenAPI-скелет</div></div></div>
 <div class="card" style="padding:0;overflow:hidden;display:flex;flex-direction:column"><div class="row" style="padding:10px 14px;border-bottom:1px solid var(--line)"><span class="tag">v2.3 · draft</span><span class="m">Nexus platform · production topology</span><span class="sp"></span><span class="btn ghost">Auto-layout</span><span class="btn ghost">Валидация <span class="g">✓</span></span><span class="btn p">Экспорт</span></div><div class="fill">{canvas}</div></div>
 <div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>Свойства · API Gateway</h3><label class="field">Тип<span>Gateway · NestJS</span></label><label class="field">Владелец<span>Platform team</span></label><label class="field">Endpoint<span class="mono">https://api.nexus.local</span></label><label class="field">SLA<span>99.9% · p95 &lt; 200 ms</span></label>
 <div><h3>Связи · 6</h3><div class="list" style="font-size:12px"><div><span class="mono b">←</span>Web · Next.js<span class="sp"></span><span class="tag">HTTPS</span></div><div><span class="mono b">→</span>Auth Service<span class="sp"></span><span class="tag">gRPC</span></div><div><span class="mono b">→</span>PostgreSQL<span class="sp"></span><span class="tag">SQL</span></div><div><span class="mono b">→</span>RabbitMQ<span class="sp"></span><span class="tag">AMQP</span></div><div><span class="mono b">←</span>Telegram Bot<span class="sp"></span><span class="tag">REST</span></div><div><span class="mono b">→</span>ГИС · внешняя<span class="sp"></span><span class="tag">SOAP</span></div></div></div>
 <div class="card fill" style="background:var(--panel2)"><h3>Описание</h3><div class="m" style="font-size:12.5px">Единая точка входа для веб-клиента и бота. Проверяет JWT через Auth Service, публикует задачи отчётов в RabbitMQ, проксирует запросы к внешней ГИС по SOAP с кешированием ответов на 15 минут.</div></div></div>
</div>'''
write('mesh', shell('Mesh','architecture',['Проекты',('Nexus platform',True),('ГИС · интеграции',),('Корпоративная платформа',),'Библиотека',('Шаблоны',False,'12'),('Компоненты',),('Документация',),('Настройки',)],'Nexus platform','Схемы <b>/</b>',body,'<span class="search">Поиск компонентов…</span><span class="btn">История версий</span><span class="btn">Поделиться</span>'))

# ---------- 7. Drop ----------
files = [('Договоры 2026','папка','—','вчера','',True),('Архитектура','папка','—','3 дня назад','',True),('Отчёты','папка','—','неделю назад','',True),('platform-topology-v2.pdf','PDF','4.2 MB','сегодня','g',False),('nexus-dashboard.png','PNG','1.8 MB','сегодня','',False),('db-schema.sql','SQL','212 KB','вчера','',False),('release-notes-2.3.md','Markdown','14 KB','вчера','',False),('backup-2026-09-09.tar.gz','Архив','3.1 GB','вчера','y',False)]
def fbadge(c):
    return '<span class="tag g">публичная ссылка</span>' if c=='g' else '<span class="tag y">загружается 64%</span>' if c=='y' else ''
frows = ''.join(f'<tr><td><span class="dot {"y" if folder else "b"}" style="border-radius:2px"></span><b>{n}</b></td><td class="m">{t}</td><td class="mono m">{s}</td><td class="d">{w}</td><td>{fbadge(c)}</td></tr>' for n,t,s,w,c,folder in files)
body = f'''
<div class="grid fill" style="grid-template-columns:200px 1fr 320px">
 <div class="card"><h3>Хранилище</h3><div class="tree"><div class="on">Мои файлы</div><div>Общие со мной <span class="d" style="float:right">14</span></div><div>Недавние</div><div>Избранное</div><div>Корзина</div></div><div style="margin-top:18px"><div class="sub" style="margin:0 0 6px">Занято 128 GB из 500 GB</div><div class="bar" style="margin:0"><i class="b" style="width:26%"></i></div></div><h3 style="margin-top:18px">Загрузки</h3><div class="list" style="font-size:12px"><div><div>backup-2026-09-09.tar.gz<div class="bar" style="width:140px"><i class="y" style="width:64%"></i></div></div><span class="sp"></span><span class="mono d">64%</span></div><div class="d">Часть 41 из 64 · 8 MB chunks · возобновляемая</div></div></div>
 <div class="card"><div class="row" style="margin-bottom:10px"><span class="crumb">Мои файлы <b>/</b></span><b>Проекты</b><span class="sp"></span><span class="btn ghost">Список</span><span class="btn ghost">Сетка</span><span class="btn p">Загрузить</span></div><table><tr><th>Имя</th><th>Тип</th><th>Размер</th><th>Изменён</th><th></th></tr>{frows}</table></div>
 <div class="card" style="display:flex;flex-direction:column;gap:12px"><h3>Preview</h3><div style="height:190px;border-radius:8px;background:linear-gradient(135deg,var(--panel2),var(--code-bg));border:1px solid var(--line);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:8px"><div style="width:120px;height:150px;background:#f1efe9;border-radius:4px;box-shadow:0 8px 24px rgba(0,0,0,.4);padding:14px"><div style="height:6px;background:#c6c2b9;border-radius:3px;margin-bottom:8px;width:60%"></div><div style="height:4px;background:#dcd8d0;border-radius:2px;margin-bottom:5px"></div><div style="height:4px;background:#dcd8d0;border-radius:2px;margin-bottom:5px"></div><div style="height:4px;background:#dcd8d0;border-radius:2px;margin-bottom:5px;width:80%"></div><div style="height:40px;background:#f45124;opacity:.85;border-radius:3px;margin-top:12px"></div></div></div>
  <div><b>platform-topology-v2.pdf</b><div class="m" style="font-size:12px">4.2 MB · PDF · 12 страниц · сегодня 11:20</div></div>
  <label class="field">Публичная ссылка<span class="mono" style="font-size:11.5px">https://drop.company.io/s/8kQ2…Xz</span></label>
  <div class="row"><span class="tag g">пароль</span><span class="tag">истекает 17.09</span><span class="tag">скачиваний: 3</span></div>
  <div><h3>Доступ</h3><div class="list" style="font-size:12px"><div><i class="av" style="background:#f45124;margin:0"></i>Михаил С.<span class="sp"></span><span class="m">владелец</span></div><div><i class="av" style="background:#5aa9ff;margin:0"></i>Анна К.<span class="sp"></span><span class="m">редактор</span></div><div><i class="av" style="background:#3ccb7f;margin:0"></i>Platform team<span class="sp"></span><span class="m">просмотр</span></div></div></div>
  <div class="d" style="font-size:11.5px;margin-top:auto">Хранится в S3 · bucket drop-prod · версии: 3</div></div>
</div>'''
write('drop', shell('Drop','cloud storage',['Файлы',('Мои файлы',True),('Общие',False,'14'),('Недавние',),('Ссылки',False,'6'),'Управление',('Участники',False,'8'),('Загрузки',False,'1'),('Настройки',)],'Проекты','Мои файлы <b>/</b>',body,'<span class="search">Поиск файлов…</span><span class="btn">+ Папка</span>'))

# ---------- 8. Relay ----------
integ = [('ГИС · SOAP','soap','g','12 340 / сут','0.2%'),('1C · REST','rest','g','4 812 / сут','0.0%'),('Telegram Bot API','webhook','g','2 190 / сут','0.1%'),('Stripe webhooks','webhook','y','318 / сут','3.4%'),('Email · SMTP','smtp','g','940 / сут','0.4%'),('Legacy PHP API','rest','r','—','100%')]
irows = ''.join(f'<div><span class="dot {s}"></span><div><b>{n}</b><div class="m" style="font-size:11.5px">{t}</div></div><span class="sp"></span><span class="mono m">{v}</span><span class="mono {"r" if e=="100%" else "y" if e=="3.4%" else "g"}" style="width:44px;text-align:right">{e}</span></div>' for n,t,s,v,e in integ)
events = [('14:02:11','stripe.invoice.paid','→ 1C','g','ok · 212 ms'),('14:02:09','gis.ObjectChanged','→ Nexus','g','ok · 318 ms'),('14:02:04','tg.message','→ Nexus','g','ok · 41 ms'),('14:01:58','stripe.charge.failed','→ 1C','y','retry 2/5 · 30 s'),('14:01:40','legacy.order.created','→ Nexus','r','DLQ · ECONNREFUSED'),('14:01:33','gis.ObjectChanged','→ Nexus','g','ok · 301 ms')]
erows = ''.join(f'<tr><td class="mono d">{t}</td><td class="mono">{e}</td><td class="m">{d}</td><td><span class="dot {s}"></span><span class="{"r" if s=="r" else "y" if s=="y" else "m"}">{st}</span></td></tr>' for t,e,d,s,st in events)
pipe = ''.join(f'<div class="card" style="flex:1;background:var(--panel2);padding:12px;{ "border-color:var(--accent)" if i==2 else ""}"><div class="d" style="font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;font-weight:700">{k}</div><b style="display:block;margin:4px 0">{n}</b><div class="mono m" style="font-size:11px">{d}</div></div>{"<span class=d style=font-size:18px>→</span>" if i<4 else ""}' for i,(k,n,d) in enumerate([('source','Stripe webhook','POST /hooks/stripe · HMAC'),('validate','JSON schema','invoice.v2'),('transform','JS mapping','amount → сумма, RUB'),('route','RabbitMQ','relay.1c.invoices'),('destination','1C REST','POST /api/invoices')]))
body = f'''
<div class="grid" style="grid-template-columns:repeat(4,1fr)">
 <div class="card"><h3>События · 24 ч</h3><div class="kpi">20 600<small>+8% к вчера</small></div>{spark(rnd(41,24,600,1100),260,40,'var(--blue)')}</div>
 <div class="card"><h3>Успешно доставлено</h3><div class="kpi g">99.1%<small>184 retry</small></div>{spark(rnd(42,24,98,100),260,40,'var(--green)')}</div>
 <div class="card"><h3>Dead-letter queue</h3><div class="kpi r">37<small>ждут разбора</small></div><div class="sub"><span class="tag r">legacy.order.created · 31</span><span class="tag y">stripe · 6</span></div></div>
 <div class="card"><h3>Очереди RabbitMQ</h3><div class="kpi">12<small>4 воркера · 0 лаг</small></div><div class="sub">relay.* · prefetch 32 · ack ручной</div></div>
</div>
<div class="card"><h3>Pipeline · Stripe → 1C<span class="sp"></span><span class="tag g">активен</span><span class="btn ghost">Тест</span><span class="btn ghost">Версии</span></h3><div class="row" style="gap:8px">{pipe}</div><div class="row" style="margin-top:12px;font-size:12px"><span class="tag">retry: экспоненциально · 5 попыток · 30 s → 8 min</span><span class="tag">timeout 10 s</span><span class="tag">идемпотентность по event.id</span><span class="tag a">DLQ → relay.dlq.1c</span></div></div>
<div class="grid fill" style="grid-template-columns:1fr 1.4fr">
 <div class="card"><h3>Интеграции<span class="sp"></span><span class="btn p">+ Подключить</span></h3><div class="list">{irows}</div></div>
 <div class="card"><h3>Лента событий<span class="sp"></span><span class="dot g"></span><span class="m">live</span></h3><table><tr><th>Время</th><th>Событие</th><th>Назначение</th><th>Статус</th></tr>{erows}</table></div>
</div>'''
write('relay', shell('Relay','integration hub',['Хаб',('Обзор',True),('Интеграции',False,'6'),('Pipelines',False,'9'),('События',),('DLQ',False,'37'),'Инфраструктура',('Очереди',False,'12'),('Секреты',),('Настройки',)],'Обзор','Хаб <b>/</b>',body,'<span class="search">Поиск событий · event.id…</span><span class="btn">24 часа</span>'))

# ---------- 9. QueryLab ----------
sql = '''<span class=p>SELECT</span> o.id, o.name, r.name <span class=p>AS</span> region,
       <span class=b>count</span>(i.id) <span class=p>AS</span> inspections,
       <span class=b>max</span>(i.inspected_at) <span class=p>AS</span> last_inspection
<span class=p>FROM</span> objects o
<span class=p>JOIN</span> regions r <span class=p>ON</span> r.id = o.region_id
<span class=p>LEFT JOIN</span> inspections i <span class=p>ON</span> i.object_id = o.id
<span class=p>WHERE</span> o.status = <span class=y>'active'</span>
  <span class=p>AND</span> o.updated_at &gt; now() - <span class=p>interval</span> <span class=y>'30 days'</span>
<span class=p>GROUP BY</span> o.id, r.name
<span class=p>ORDER BY</span> inspections <span class=p>DESC</span>
<span class=p>LIMIT</span> <span class=a>50</span>;'''
res = [(10482,'Мост через р. Ока, км 214','Калужская обл.',18,'2026-09-08'),(9931,'Водозабор №3','Тульская обл.',14,'2026-09-09'),(10210,'Подстанция 110 кВ «Северная»','Калужская обл.',12,'2026-09-02'),(8877,'Путепровод, км 88','Московская обл.',11,'2026-09-07'),(10501,'Очистные сооружения','Тульская обл.',9,'2026-08-30'),(9120,'Газораспределительный пункт','Московская обл.',7,'2026-09-05')]
rrows = ''.join(f'<tr><td class="mono d">{i}</td><td>{n}</td><td class="m">{r}</td><td class="mono">{c}</td><td class="mono m">{d}</td></tr>' for i,n,r,c,d in res)
plan = '''<span class=g>Limit</span>  rows=50  actual 38.2 ms
 → <span class=g>Sort</span>  rows=2716  top-N heapsort, 32 kB
   → <span class=g>HashAggregate</span>  rows=2716  36.9 ms
     → <span class=g>Hash Left Join</span>  rows=14 109  29.4 ms
       → <span class=y>Seq Scan</span> on objects o  rows=2716  6.8 ms
           Filter: status = 'active' AND updated_at &gt; …
           <span class=r>Rows Removed by Filter: 18 402</span>
       → <span class=g>Index Scan</span> inspections_object_id_idx  0.03 ms
<span class=m>Planning 0.41 ms · Execution 38.6 ms</span>
<span class=y>⚠ Seq Scan: индекс (status, updated_at) даст ~6×</span>'''
slow = [('objects · report_summary()','2.4 s','412 / ч'),('inspections · full export','1.1 s','12 / ч'),('SELECT … FROM audit_log WHERE …','640 ms','1 890 / ч')]
srows = ''.join(f'<div><span class="mono" style="font-size:11.5px">{q}</span><span class="sp"></span><span class="mono y">{t}</span><span class="mono d">{n}</span></div>' for q,t,n in slow)
body = f'''
<div class="grid fill" style="grid-template-columns:220px 1fr">
 <div class="card"><h3>Подключения</h3><div class="tree"><div class="on"><span class="dot g"></span>gis-prod · PostgreSQL 16</div><div class="i1">public <span class="d" style="float:right">42</span></div><div class="i2">objects</div><div class="i2">inspections</div><div class="i2">regions</div><div class="i2">audit_log</div><div class="i1">reports <span class="d" style="float:right">8</span></div><div><span class="dot g"></span>nexus-prod · PG 16</div><div><span class="dot"></span>legacy · PG 12</div></div><h3 style="margin-top:18px">Relations · objects</h3><div class="list" style="font-size:12px"><div><span class="mono b">→</span>regions.id<span class="sp"></span><span class="d">FK</span></div><div><span class="mono b">←</span>inspections.object_id<span class="sp"></span><span class="d">1:N</span></div><div><span class="mono b">←</span>documents.object_id<span class="sp"></span><span class="d">1:N</span></div></div></div>
 <div style="display:flex;flex-direction:column;gap:14px;min-height:0">
  <div class="card" style="display:flex;flex-direction:column"><div class="tabs" style="margin-bottom:8px"><span class="on">query-1.sql</span><span>slow-audit.sql</span><span class="d">+</span><span class="sp" style="flex:1"></span><span class="tag g">gis-prod</span><span class="btn p">Выполнить ⌘↵</span></div><div class="log" style="flex:none">{sql}</div></div>
  <div class="grid fill" style="grid-template-columns:1.1fr 1fr;min-height:0"><div class="card"><h3>Результат<span class="sp"></span><span class="tag">50 строк · 38.6 ms</span><span class="btn ghost">CSV</span></h3><table style="table-layout:fixed"><colgroup><col style="width:11%"><col style="width:37%"><col style="width:22%"><col style="width:11%"><col style="width:19%"></colgroup><tr><th>id</th><th>name</th><th>region</th><th>insp.</th><th>last</th></tr>{rrows}</table></div>
  <div style="display:flex;flex-direction:column;gap:14px;min-height:0"><div class="card fill" style="display:flex;flex-direction:column"><h3>EXPLAIN ANALYZE</h3><div class="log" style="font-size:11px">{plan}</div></div><div class="card"><h3>Медленные запросы · 24 ч</h3><div class="list">{srows}</div></div></div></div>
 </div>
</div>'''
write('querylab', shell('QueryLab','db explorer',['База',('SQL-редактор',True),('Таблицы',False,'42'),('Схема · ERD',),('История',),'Производительность',('Медленные запросы',False,'3'),('Индексы',),('Активность',),('Настройки',)],'SQL-редактор','gis-prod <b>/</b>',body,'<span class="search">Поиск таблиц, колонок…</span><span class="btn">Транзакция: auto</span>'))

# ---------- 10. Workspace ----------
def task(t, tag, c, who, pr=''):
    return f'<div class="card" style="padding:12px;background:var(--panel2);margin-bottom:10px"><div class="row" style="gap:6px;margin-bottom:6px"><span class="tag {c}">{tag}</span>{f"<span class=tag>{pr}</span>" if pr else ""}<span class="sp"></span><i class="av" style="background:{who};margin:0;width:20px;height:20px"></i></div><b style="font-size:12.5px">{t}</b></div>'
cols = [('Backlog',4,[task('Экспорт отчётов в XLSX','feature','b','#b48cff'),task('Roles: наблюдатель','rbac','a','#5aa9ff'),task('Ограничить размер вложений','tech','','#3ccb7f'),task('Уведомления в Telegram','feature','b','#f45124')]),('В работе',3,[task('Комментарии с упоминаниями @','feature','b','#f45124','high'),task('Активность: фильтр по проекту','ux','y','#5aa9ff'),task('Права на документы по ролям','rbac','a','#b48cff','high')]),('Ревью',2,[task('Миграция: project_members','tech','','#3ccb7f'),task('API: PATCH /tasks/:id','feature','b','#f45124')]),('Готово',5,[task('Kanban: drag-and-drop','feature','b','#5aa9ff'),task('Документы: версии','feature','b','#b48cff'),task('RBAC: owner / admin / member','rbac','a','#f45124')])]
kan = ''.join(f'<div class="card" style="padding:12px;display:flex;flex-direction:column;min-height:0"><h3>{n}<span class="sp"></span><span class="d">{c}</span></h3><div class="fill" style="overflow:hidden">{"".join(ts)}</div></div>' for n,c,ts in cols)
act = [('#f45124','Михаил С.','перевёл «Комментарии с упоминаниями» в Ревью','5 мин'),('#5aa9ff','Анна К.','прокомментировала «Права на документы»','22 мин'),('#3ccb7f','Илья В.','загрузил документ «API-контракт v3»','1 ч'),('#b48cff','Дарья М.','создала задачу «Roles: наблюдатель»','3 ч'),('#f45124','Михаил С.','изменил роль Ильи В. → admin','вчера')]
arows = ''.join(f'<div><i class="av" style="background:{c};margin:0"></i><div style="font-size:12px"><b>{w}</b> <span class="m">{a}</span></div><span class="sp"></span><span class="d" style="white-space:nowrap">{t}</span></div>' for c,w,a,t in act)
body = f'''
<div class="row"><div><div class="kpi" style="font-size:18px">Спринт 12</div><div class="sub">14 задач · 6 участников · до 19 сентября</div></div><span class="sp"></span><div class="row" style="gap:0"><i class="av" style="background:#f45124"></i><i class="av" style="background:#5aa9ff"></i><i class="av" style="background:#3ccb7f"></i><i class="av" style="background:#b48cff"></i><span class="d" style="margin-left:10px">+2</span></div><span class="btn">Фильтр</span><span class="btn p">+ Задача</span></div>
<div class="tabs"><span>Обзор</span><span class="on">Доска</span><span>Список</span><span>Документы <span class="d">9</span></span><span>Участники <span class="d">6</span></span><span>Активность</span></div>
<div class="grid fill" style="grid-template-columns:repeat(4,1fr) 300px;min-height:0">{kan}
 <div style="display:flex;flex-direction:column;gap:14px;min-height:0"><div class="card"><h3>Активность</h3><div class="list">{arows}</div></div>
 <div class="card fill"><h3>Роли проекта</h3><div class="list" style="font-size:12px"><div><i class="av" style="background:#f45124;margin:0"></i>Михаил С.<span class="sp"></span><span class="tag a">owner</span></div><div><i class="av" style="background:#3ccb7f;margin:0"></i>Илья В.<span class="sp"></span><span class="tag">admin</span></div><div><i class="av" style="background:#5aa9ff;margin:0"></i>Анна К.<span class="sp"></span><span class="tag">member</span></div><div><i class="av" style="background:#b48cff;margin:0"></i>Дарья М.<span class="sp"></span><span class="tag">member</span></div><div><i class="av" style="background:#e9b949;margin:0"></i>Заказчик<span class="sp"></span><span class="tag">viewer</span></div></div></div></div>
</div>'''
write('workspace', shell('Workspace','team',[('Проекты',True),('Мои задачи',False,'6'),('Документы',),('Входящие',False,'3'),('Участники',),('Настройки',)],'Доска','Nexus platform <b>/</b>',body,'<span class="search">Поиск задач, документов…</span>'))
print('ok', len(os.listdir(OUT)))
