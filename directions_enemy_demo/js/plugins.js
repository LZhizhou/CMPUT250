// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Plugin used to set basic parameters.","parameters":{"cacheLimit":"20","screenWidth":"1280","screenHeight":"720","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QPlus","status":true,"description":"<QPlus> (Should go above all Q Plugins)\r\nSome small changes to MV for easier plugin development.","parameters":{"Quick Test":"false","Default Enabled Switches":"[]","Ignore Mouse when inactive":"false"}},
{"name":"QMovement","status":true,"description":"<QMovement>\r\nMore control over character movement","parameters":{"Main Settings":"","Grid":"1","Tile Size":"48","Off Grid":"true","Optional Settings":"","Smart Move":"2","Mid Pass":"false","Move on click":"false","Diagonal":"true","Diagonal Speed":"0","Colliders":"","Player Collider":"{\"Type\":\"box\",\"Width\":\"24\",\"Height\":\"24\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Event Collider":"{\"Type\":\"box\",\"Width\":\"36\",\"Height\":\"36\",\"Offset X\":\"6\",\"Offset Y\":\"24\"}","Presets":"[\"{\\\"ID\\\":\\\"longbox\\\",\\\"Type\\\":\\\"box\\\",\\\"Width\\\":\\\"24\\\",\\\"Height\\\":\\\"72\\\",\\\"Offset X\\\":\\\"12\\\",\\\"Offset Y\\\":\\\"-40\\\"}\",\"{\\\"ID\\\":\\\"smallcircle\\\",\\\"Type\\\":\\\"circle\\\",\\\"Width\\\":\\\"24\\\",\\\"Height\\\":\\\"24\\\",\\\"Offset X\\\":\\\"12\\\",\\\"Offset Y\\\":\\\"12\\\"}\",\"{\\\"ID\\\":\\\"largecircle\\\",\\\"Type\\\":\\\"circle\\\",\\\"Width\\\":\\\"48\\\",\\\"Height\\\":\\\"48\\\",\\\"Offset X\\\":\\\"0\\\",\\\"Offset Y\\\":\\\"-24\\\"}\"]","Debug Settings":"","Show Colliders":"false"}},
{"name":"QInput","status":true,"description":"<QInput>\nAdds additional keys to Input class, and allows remapping keys.","parameters":{"Threshold":"0.5","Input Remap":"","Ok":"[\"#enter\", \"#space\", \"#z\", \"$A\"]","Escape / Cancel":"[\"#esc\", \"#insert\", \"#x\", \"#num0\", \"$B\"]","Menu":"[\"#esc\", \"$Y\"]","Shift":"","Control":"[\"#ctrl\", \"#alt\"]","Tab":"[\"#tab\"]","Pageup":"[\"#pageup\",\"$L1\"]","Pagedown":"[\"#pagedown\",\"$R1\"]","Left":"[\"#left\",\"#num4\",\"$LEFT\",\"#a\"]","Right":"[\"#right\",\"#num6\",\"$RIGHT\",\"#d\"]","Up":"[\"#up\",\"#num8\",\"$UP\",\"#w\"]","Down":"[\"#down\",\"#num2\",\"$DOWN\",\"#s\"]","Debug":"[\"#f9\"]","ControlKeys Remap":"","FPS":"f2","Streched":"f3","FullScreen":"f4","Restart":"f5","Console":"f8"}},
{"name":"QSprite","status":true,"description":"<QSprite>\nLets you configure Spritesheets","parameters":{"File Name Identifier":"%{config}-","Random Idle Interval":"","Use New Adjust":"true"}},
{"name":"QAudio","status":true,"description":"<QAudio>\nFew new audio features","parameters":{"Default Radius":"5","Default Max Volume":"100"}},
{"name":"QPathfind","status":true,"description":"<QPathfind>\r\nA* Pathfinding algorithm","parameters":{"Diagonals":"true","Any Angle":"true","Intervals":"200","Smart Wait":"60","Dash on Mouse":"true"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"SIAKO_Scripting_tutorial_advanced_03","status":true,"description":"SIAKO_customMenu v0.80 自訂遊戲菜單樣式","parameters":{}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"QABS","status":true,"description":"<QABS>\r\nAction Battle System for QMovement","parameters":{"Attack Settings":"","Quick Target":"false","Lock when Targeting":"true","Aim with Mouse":"true","Aim with Analog":"true","Move Resistance Rate Stat":"xparam(1)","Loot Settings":"","Loot Decay":"600","AoE Loot":"true","Loot Touch Trigger":"true","Gold Icon":"314","Level Animation":"52","Enemy AI":"","AI Default Sight Range":"240","AI Action Wait":"30","AI Uses QSight":"true","AI uses QPathfind":"true","Default Skills":"[\"{\\\"Keyboard Input\\\":\\\"mouse1\\\",\\\"Gamepad Input\\\":\\\"$L2\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"11\\\"}\",\"{\\\"Keyboard Input\\\":\\\"mouse2\\\",\\\"Gamepad Input\\\":\\\"$R2\\\",\\\"Rebind\\\":\\\"true\\\",\\\"Skill Id\\\":\\\"12\\\"}\"]"}},
{"name":"QABS+Gauges","status":true,"description":"<QABSGauges>","parameters":{"Gauge Configs":"","Gauge Width":"48","Gauge Height":"4","Boss Gauge Width":"480","Boss Gauge Height":"16","Gauge Default OX":"0","Gauge Default OY":"0","Boss Gauge Default OX":"0","Boss Gauge Default OY":"24","Gauge Colors":"","Gauge Background Color":"#202040","Gauge Inbetween Color":"#ffffff","Gauge HP Color 1":"#e08040","Gauge HP Color 2":"#f0c040","Gauge Text":"","Text Font":"GameFont","Font Size":"0","Font Color":"#ffffff","Boss Text Font":"GameFont","Boss Font Size":"18","Boss Font Color":"#ffffff"}},
{"name":"QSpeed","status":true,"description":"<QSpeed>\r\nAllows for custom Move speeds and an acceleration effect","parameters":{"Acceleration":"true","Duration":"30","Dash Inc":"1"}},
{"name":"QM+CollisionMap","status":true,"description":"<QMCollisionMap>\nQMovement Addon: Adds image collision map feature","parameters":{"Scan Size":"4","Folder":"img/parallaxes/"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"OrangeOverlay","status":true,"description":"v1.1.2 - Adds overlay images to the map <OrangeOverlay>","parameters":{"Organized Folders":"false","Parallax Layer Filename":"par","Ground Layer Filename":"ground","Light Layer Filename":"light","Shadow Layer Filename":"shadow","Light Opacity":"185","Quick Start":"true","Bush Region ID":"7","Fog Switch ID":"1","Light Switch ID":"2","Parallax Switch ID":"3","Shadow Switch ID":"4"}},
{"name":"========================","status":true,"description":"","parameters":{}},
{"name":"SRD_SuperToolsEngine","status":true,"description":"The heart of all maker-style plugins; it adds a playtesting editor that can be opened with F12.","parameters":{"Connect Editor":"true","Auto Open Window":"false","Auto Move Window":"true","Menu Editor Exempt List":"[\"Window_BattleLog\",\"Window_MapName\"]"}},
{"name":"SRD_HUDMaker","status":true,"description":"Allows developers to create their own map-based HUD through an in-game GUI window!","parameters":{"Active Updating":"false","Show During Events":"transparent","Map Global Condition":"","Battle Global Condition":"","Disable Delete Key":"true"}},
{"name":"QAudio","status":true,"description":"<QAudio>\nFew new audio features","parameters":{"Default Radius":"5","Default Max Volume":"100"}},
{"name":"QCamera","status":true,"description":"<QCamera>\r\nBetter Camera control","parameters":{"Offset":"0.5","Shift Y":"0","Shift X":"0"}},
{"name":"QTouch","status":true,"description":"<QTouch>\r\nBetter mouse handling for MV","parameters":{"Mouse Decay":"60","Default Cursor":"","Pointer Cursor":""}},
{"name":"Kath_GameOver","status":false,"description":"Change what happens when the party dies or Game Over is called.","parameters":{"Party Death Common Event ID":"","Show Game Over Scene":"false","Reload Last Save":"true","After Game Over Common Event ID":"2"}},
{"name":"TDDP_ManageDashing","status":true,"description":"1.0.1 Lets you manage the dashing mode in your game with simple plugin options.","parameters":{"Disable Auto-dash":"false","Force Dashing":"false","Disable Dashing":"false","Remove Always Dash Option":"true"}},
{"name":"OrangeAutoSave","status":true,"description":"Automatically save the game on map change <OrangeAutoSave>","parameters":{"saveSlot":"1","saveOnPluginTransfer":"true","saveOnTransferCommand":"true","autoSaveSlot":"false"}},
{"name":"SRD_GameOverCore","status":false,"description":"Gives more options for one's Game Over scene. Common Events can be called and a Retry function has been added.","parameters":{"Default Image":"GameOver","== Command Window ==":"","Use Command Window":"true","Command Window Phase":"end","Allow Retry Command":"false","Command Window X":"(Graphics.boxWidth - this._commandWindow.width) / 2","Command Window Y":"(Graphics.boxHeight - this._commandWindow.height) / 2","== Command Texts ==":"","Retry Command Text":"Retry Battle","Load Command Text":"Load Game","Title Command Text":"Return to Title","== Command Events ==":"","Start Common Event":"0","Middle Common Event":"0","End Common Event":"0"}},
{"name":"menu_music","status":true,"description":"Allows you to set custom BGM to play whenever the player\r\nenters the menu.","parameters":{}},
{"name":"QPopup","status":true,"description":"<QPopup>\r\nLets you create popups in the map or on screen","parameters":{"Presets":"[\"{\\\"ID\\\":\\\"playerdemaged\\\",\\\"Style\\\":\\\"\\\",\\\"Font Face\\\":\\\"GameFont\\\",\\\"Font Size\\\":\\\"28\\\",\\\"Font Color\\\":\\\"#ffffff\\\",\\\"Padding\\\":\\\"0\\\",\\\"Windowed\\\":\\\"false\\\",\\\"Transitions\\\":\\\"[\\\\\\\"60 60 fadeOut\\\\\\\"]\\\"}\"]"}},
{"name":"YEP_CreditsPage","status":true,"description":"v1.02 Adds a 'Credits' command to the title screen that\r\nwill take the player to a credits scene.","parameters":{"---General---":"","Command Name":"Credits","---Credit Lines---":"","Line 1 Text":"","Line 1 URL":"","Line 2 Text":"","Line 2 URL":"","Line 3 Text":"","Line 3 URL":"","Line 4 Text":"","Line 4 URL":"","Line 5 Text":"","Line 5 URL":"","Line 6 Text":"","Line 6 URL":"","Line 7 Text":"","Line 7 URL":"","Line 8 Text":"","Line 8 URL":"","Line 9 Text":"","Line 9 URL":"","Line 10 Text":"","Line 10 URL":"","Line 11 Text":"","Line 11 URL":"","Line 12 Text":"","Line 12 URL":"","Line 13 Text":"","Line 13 URL":"","Line 14 Text":"","Line 14 URL":"","Line 15 Text":"","Line 15 URL":"","Line 16 Text":"","Line 16 URL":"","Line 17 Text":"","Line 17 URL":"","Line 18 Text":"","Line 18 URL":"","Line 19 Text":"","Line 19 URL":"","Line 20 Text":"","Line 20 URL":"","Line 21 Text":"","Line 21 URL":"","Line 22 Text":"","Line 22 URL":"","Line 23 Text":"","Line 23 URL":"","Line 24 Text":"","Line 24 URL":"","Line 25 Text":"","Line 25 URL":"","Line 26 Text":"","Line 26 URL":"","Line 27 Text":"","Line 27 URL":"","Line 28 Text":"","Line 28 URL":"","Line 29 Text":"","Line 29 URL":"","Line 30 Text":"","Line 30 URL":"","Line 31 Text":"","Line 31 URL":"","Line 32 Text":"","Line 32 URL":"","Line 33 Text":"","Line 33 URL":"","Line 34 Text":"","Line 34 URL":"","Line 35 Text":"","Line 35 URL":"","Line 36 Text":"","Line 36 URL":"","Line 37 Text":"","Line 37 URL":"","Line 38 Text":"","Line 38 URL":"","Line 39 Text":"","Line 39 URL":"","Line 40 Text":"","Line 40 URL":"","Line 41 Text":"","Line 41 URL":"","Line 42 Text":"","Line 42 URL":"","Line 43 Text":"","Line 43 URL":"","Line 44 Text":"","Line 44 URL":"","Line 45 Text":"","Line 45 URL":"","Line 46 Text":"","Line 46 URL":"","Line 47 Text":"","Line 47 URL":"","Line 48 Text":"","Line 48 URL":"","Line 49 Text":"","Line 49 URL":"","Line 50 Text":"","Line 50 URL":"","Line 51 Text":"","Line 51 URL":"","Line 52 Text":"","Line 52 URL":"","Line 53 Text":"","Line 53 URL":"","Line 54 Text":"","Line 54 URL":"","Line 55 Text":"","Line 55 URL":"","Line 56 Text":"","Line 56 URL":"","Line 57 Text":"","Line 57 URL":"","Line 58 Text":"","Line 58 URL":"","Line 59 Text":"","Line 59 URL":"","Line 60 Text":"","Line 60 URL":"","Line 61 Text":"","Line 61 URL":"","Line 62 Text":"","Line 62 URL":"","Line 63 Text":"","Line 63 URL":"","Line 64 Text":"","Line 64 URL":"","Line 65 Text":"","Line 65 URL":"","Line 66 Text":"","Line 66 URL":"","Line 67 Text":"","Line 67 URL":"","Line 68 Text":"","Line 68 URL":"","Line 69 Text":"","Line 69 URL":"","Line 70 Text":"","Line 70 URL":"","Line 71 Text":"","Line 71 URL":"","Line 72 Text":"","Line 72 URL":"","Line 73 Text":"","Line 73 URL":"","Line 74 Text":"","Line 74 URL":"","Line 75 Text":"","Line 75 URL":"","Line 76 Text":"","Line 76 URL":"","Line 77 Text":"","Line 77 URL":"","Line 78 Text":"","Line 78 URL":"","Line 79 Text":"","Line 79 URL":"","Line 80 Text":"","Line 80 URL":"","Line 81 Text":"","Line 81 URL":"","Line 82 Text":"","Line 82 URL":"","Line 83 Text":"","Line 83 URL":"","Line 84 Text":"","Line 84 URL":"","Line 85 Text":"","Line 85 URL":"","Line 86 Text":"","Line 86 URL":"","Line 87 Text":"","Line 87 URL":"","Line 88 Text":"","Line 88 URL":"","Line 89 Text":"","Line 89 URL":"","Line 90 Text":"","Line 90 URL":"","Line 91 Text":"","Line 91 URL":"","Line 92 Text":"","Line 92 URL":"","Line 93 Text":"","Line 93 URL":"","Line 94 Text":"","Line 94 URL":"","Line 95 Text":"","Line 95 URL":"","Line 96 Text":"","Line 96 URL":"","Line 97 Text":"","Line 97 URL":"","Line 98 Text":"","Line 98 URL":"","Line 99 Text":"","Line 99 URL":"","Line 100 Text":"","Line 100 URL":"","Line 101 Text":"","Line 101 URL":"","Line 102 Text":"","Line 102 URL":"","Line 103 Text":"","Line 103 URL":"","Line 104 Text":"","Line 104 URL":"","Line 105 Text":"","Line 105 URL":"","Line 106 Text":"","Line 106 URL":"","Line 107 Text":"","Line 107 URL":"","Line 108 Text":"","Line 108 URL":"","Line 109 Text":"","Line 109 URL":"","Line 110 Text":"","Line 110 URL":"","Line 111 Text":"","Line 111 URL":"","Line 112 Text":"","Line 112 URL":"","Line 113 Text":"","Line 113 URL":"","Line 114 Text":"","Line 114 URL":"","Line 115 Text":"","Line 115 URL":"","Line 116 Text":"","Line 116 URL":"","Line 117 Text":"","Line 117 URL":"","Line 118 Text":"","Line 118 URL":"","Line 119 Text":"","Line 119 URL":"","Line 120 Text":"","Line 120 URL":"","Line 121 Text":"","Line 121 URL":"","Line 122 Text":"","Line 122 URL":"","Line 123 Text":"","Line 123 URL":"","Line 124 Text":"","Line 124 URL":"","Line 125 Text":"","Line 125 URL":"","Line 126 Text":"","Line 126 URL":"","Line 127 Text":"","Line 127 URL":"","Line 128 Text":"","Line 128 URL":"","Line 129 Text":"","Line 129 URL":"","Line 130 Text":"","Line 130 URL":"","Line 131 Text":"","Line 131 URL":"","Line 132 Text":"","Line 132 URL":"","Line 133 Text":"","Line 133 URL":"","Line 134 Text":"","Line 134 URL":"","Line 135 Text":"","Line 135 URL":"","Line 136 Text":"","Line 136 URL":"","Line 137 Text":"","Line 137 URL":"","Line 138 Text":"","Line 138 URL":"","Line 139 Text":"","Line 139 URL":"","Line 140 Text":"","Line 140 URL":"","Line 141 Text":"","Line 141 URL":"","Line 142 Text":"","Line 142 URL":"","Line 143 Text":"","Line 143 URL":"","Line 144 Text":"","Line 144 URL":"","Line 145 Text":"","Line 145 URL":"","Line 146 Text":"","Line 146 URL":"","Line 147 Text":"","Line 147 URL":"","Line 148 Text":"","Line 148 URL":"","Line 149 Text":"","Line 149 URL":"","Line 150 Text":"","Line 150 URL":"","Line 151 Text":"","Line 151 URL":"","Line 152 Text":"","Line 152 URL":"","Line 153 Text":"","Line 153 URL":"","Line 154 Text":"","Line 154 URL":"","Line 155 Text":"","Line 155 URL":"","Line 156 Text":"","Line 156 URL":"","Line 157 Text":"","Line 157 URL":"","Line 158 Text":"","Line 158 URL":"","Line 159 Text":"","Line 159 URL":"","Line 160 Text":"","Line 160 URL":"","Line 161 Text":"","Line 161 URL":"","Line 162 Text":"","Line 162 URL":"","Line 163 Text":"","Line 163 URL":"","Line 164 Text":"","Line 164 URL":"","Line 165 Text":"","Line 165 URL":"","Line 166 Text":"","Line 166 URL":"","Line 167 Text":"","Line 167 URL":"","Line 168 Text":"","Line 168 URL":"","Line 169 Text":"","Line 169 URL":"","Line 170 Text":"","Line 170 URL":"","Line 171 Text":"","Line 171 URL":"","Line 172 Text":"","Line 172 URL":"","Line 173 Text":"","Line 173 URL":"","Line 174 Text":"","Line 174 URL":"","Line 175 Text":"","Line 175 URL":"","Line 176 Text":"","Line 176 URL":"","Line 177 Text":"","Line 177 URL":"","Line 178 Text":"","Line 178 URL":"","Line 179 Text":"","Line 179 URL":"","Line 180 Text":"","Line 180 URL":"","Line 181 Text":"","Line 181 URL":"","Line 182 Text":"","Line 182 URL":"","Line 183 Text":"","Line 183 URL":"","Line 184 Text":"","Line 184 URL":"","Line 185 Text":"","Line 185 URL":"","Line 186 Text":"","Line 186 URL":"","Line 187 Text":"","Line 187 URL":"","Line 188 Text":"","Line 188 URL":"","Line 189 Text":"","Line 189 URL":"","Line 190 Text":"","Line 190 URL":"","Line 191 Text":"","Line 191 URL":"","Line 192 Text":"","Line 192 URL":"","Line 193 Text":"","Line 193 URL":"","Line 194 Text":"","Line 194 URL":"","Line 195 Text":"","Line 195 URL":"","Line 196 Text":"","Line 196 URL":"","Line 197 Text":"","Line 197 URL":"","Line 198 Text":"","Line 198 URL":"","Line 199 Text":"","Line 199 URL":"","Line 200 Text":"","Line 200 URL":"","Line 201 Text":"","Line 201 URL":"","Line 202 Text":"","Line 202 URL":"","Line 203 Text":"","Line 203 URL":"","Line 204 Text":"","Line 204 URL":"","Line 205 Text":"","Line 205 URL":"","Line 206 Text":"","Line 206 URL":"","Line 207 Text":"","Line 207 URL":"","Line 208 Text":"","Line 208 URL":"","Line 209 Text":"","Line 209 URL":"","Line 210 Text":"","Line 210 URL":"","Line 211 Text":"","Line 211 URL":"","Line 212 Text":"","Line 212 URL":"","Line 213 Text":"","Line 213 URL":"","Line 214 Text":"","Line 214 URL":"","Line 215 Text":"","Line 215 URL":"","Line 216 Text":"","Line 216 URL":"","Line 217 Text":"","Line 217 URL":"","Line 218 Text":"","Line 218 URL":"","Line 219 Text":"","Line 219 URL":"","Line 220 Text":"","Line 220 URL":"","Line 221 Text":"","Line 221 URL":"","Line 222 Text":"","Line 222 URL":"","Line 223 Text":"","Line 223 URL":"","Line 224 Text":"","Line 224 URL":"","Line 225 Text":"","Line 225 URL":"","Line 226 Text":"","Line 226 URL":"","Line 227 Text":"","Line 227 URL":"","Line 228 Text":"","Line 228 URL":"","Line 229 Text":"","Line 229 URL":"","Line 230 Text":"","Line 230 URL":"","Line 231 Text":"","Line 231 URL":"","Line 232 Text":"","Line 232 URL":"","Line 233 Text":"","Line 233 URL":"","Line 234 Text":"","Line 234 URL":"","Line 235 Text":"","Line 235 URL":"","Line 236 Text":"","Line 236 URL":"","Line 237 Text":"","Line 237 URL":"","Line 238 Text":"","Line 238 URL":"","Line 239 Text":"","Line 239 URL":"","Line 240 Text":"","Line 240 URL":"","Line 241 Text":"","Line 241 URL":"","Line 242 Text":"","Line 242 URL":"","Line 243 Text":"","Line 243 URL":"","Line 244 Text":"","Line 244 URL":"","Line 245 Text":"","Line 245 URL":"","Line 246 Text":"","Line 246 URL":"","Line 247 Text":"","Line 247 URL":"","Line 248 Text":"","Line 248 URL":"","Line 249 Text":"","Line 249 URL":"","Line 250 Text":"","Line 250 URL":"","Line 251 Text":"","Line 251 URL":"","Line 252 Text":"","Line 252 URL":"","Line 253 Text":"","Line 253 URL":"","Line 254 Text":"","Line 254 URL":"","Line 255 Text":"","Line 255 URL":"","Line 256 Text":"","Line 256 URL":"","Line 257 Text":"","Line 257 URL":"","Line 258 Text":"","Line 258 URL":"","Line 259 Text":"","Line 259 URL":"","Line 260 Text":"","Line 260 URL":"","Line 261 Text":"","Line 261 URL":"","Line 262 Text":"","Line 262 URL":"","Line 263 Text":"","Line 263 URL":"","Line 264 Text":"","Line 264 URL":"","Line 265 Text":"","Line 265 URL":"","Line 266 Text":"","Line 266 URL":"","Line 267 Text":"","Line 267 URL":"","Line 268 Text":"","Line 268 URL":"","Line 269 Text":"","Line 269 URL":"","Line 270 Text":"","Line 270 URL":"","Line 271 Text":"","Line 271 URL":"","Line 272 Text":"","Line 272 URL":"","Line 273 Text":"","Line 273 URL":"","Line 274 Text":"","Line 274 URL":"","Line 275 Text":"","Line 275 URL":"","Line 276 Text":"","Line 276 URL":"","Line 277 Text":"","Line 277 URL":"","Line 278 Text":"","Line 278 URL":"","Line 279 Text":"","Line 279 URL":"","Line 280 Text":"","Line 280 URL":"","Line 281 Text":"","Line 281 URL":"","Line 282 Text":"","Line 282 URL":"","Line 283 Text":"","Line 283 URL":"","Line 284 Text":"","Line 284 URL":"","Line 285 Text":"","Line 285 URL":"","Line 286 Text":"","Line 286 URL":"","Line 287 Text":"","Line 287 URL":"","Line 288 Text":"","Line 288 URL":"","Line 289 Text":"","Line 289 URL":"","Line 290 Text":"","Line 290 URL":"","Line 291 Text":"","Line 291 URL":"","Line 292 Text":"","Line 292 URL":"","Line 293 Text":"","Line 293 URL":"","Line 294 Text":"","Line 294 URL":"","Line 295 Text":"","Line 295 URL":"","Line 296 Text":"","Line 296 URL":"","Line 297 Text":"","Line 297 URL":"","Line 298 Text":"","Line 298 URL":"","Line 299 Text":"","Line 299 URL":"","Line 300 Text":"","Line 300 URL":""}},
{"name":"QMap","status":true,"description":"<QMap>\r\nCreates maps made with QMap Editor","parameters":{}},
{"name":"QABS+Skillbar","status":true,"description":"<QABSSkillbar>\r\nQABS Addon: Adds a mmo like skillbar","parameters":{"Show Unassigned Keys":"false","Default visibility":"true"}}
];
