"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[5783],{"../packages/core-components/src/components/LogViewer/RealLogViewer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RealLogViewer:()=>RealLogViewer});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Box=__webpack_require__("../node_modules/@material-ui/core/esm/Box/Box.js"),IconButton=__webpack_require__("../node_modules/@material-ui/core/esm/IconButton/IconButton.js"),FileCopy=__webpack_require__("../node_modules/@material-ui/icons/FileCopy.js"),classnames=__webpack_require__("../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("../node_modules/react-router-dom/node_modules/react-router/dist/index.js"),index_esm=__webpack_require__("../node_modules/react-virtualized-auto-sizer/dist/index.esm.js"),dist_index_esm=__webpack_require__("../node_modules/react-window/dist/index.esm.js");const ansiRegex=(0,__webpack_require__("../node_modules/ansi-regex/index.js").Z)(),newlineRegex=/\n\r?/g,codeModifiers=Object.fromEntries(Object.entries({1:m=>({...m,bold:!0}),3:m=>({...m,italic:!0}),4:m=>({...m,underline:!0}),22:({bold:_,...m})=>m,23:({italic:_,...m})=>m,24:({underline:_,...m})=>m,30:m=>({...m,foreground:"black"}),31:m=>({...m,foreground:"red"}),32:m=>({...m,foreground:"green"}),33:m=>({...m,foreground:"yellow"}),34:m=>({...m,foreground:"blue"}),35:m=>({...m,foreground:"magenta"}),36:m=>({...m,foreground:"cyan"}),37:m=>({...m,foreground:"white"}),39:({foreground:_,...m})=>m,90:m=>({...m,foreground:"grey"}),40:m=>({...m,background:"black"}),41:m=>({...m,background:"red"}),42:m=>({...m,background:"green"}),43:m=>({...m,background:"yellow"}),44:m=>({...m,background:"blue"}),45:m=>({...m,background:"magenta"}),46:m=>({...m,background:"cyan"}),47:m=>({...m,background:"white"}),49:({background:_,...m})=>m}).map((([code,modifier])=>[`[${code}m`,modifier])));class AnsiLine{lastChunk(){return this.chunks[this.chunks.length-1]}replaceLastChunk(newChunks){newChunks&&(this.chunks.splice(this.chunks.length-1,1,...newChunks),this.text=this.chunks.map((c=>c.text)).join("").toLocaleLowerCase("en-US"))}constructor(lineNumber=1,chunks=[]){this.lineNumber=lineNumber,this.chunks=chunks,this.text=chunks.map((c=>c.text)).join("").toLocaleLowerCase("en-US")}}class AnsiProcessor{process(text){if(this.text===text)return this.lines;if(text.startsWith(this.text)){var _newLines_;const lastLineIndex=this.lines.length>0?this.lines.length-1:0;var _this_lines_lastLineIndex;const lastLine=null!==(_this_lines_lastLineIndex=this.lines[lastLineIndex])&&void 0!==_this_lines_lastLineIndex?_this_lines_lastLineIndex:new AnsiLine,lastChunk=lastLine.lastChunk();var _lastChunk_text;const newLines=this.processLines((null!==(_lastChunk_text=null==lastChunk?void 0:lastChunk.text)&&void 0!==_lastChunk_text?_lastChunk_text:"")+text.slice(this.text.length),null==lastChunk?void 0:lastChunk.modifiers,null==lastLine?void 0:lastLine.lineNumber);lastLine.replaceLastChunk(null===(_newLines_=newLines[0])||void 0===_newLines_?void 0:_newLines_.chunks),this.lines[lastLineIndex]=lastLine,this.lines.push(...newLines.slice(1))}else this.lines=this.processLines(text);return this.text=text,this.lines}constructor(){this.text="",this.lines=[],this.processLines=(text,modifiers={},startingLineNumber=1)=>{const lines=[];let currentModifiers=modifiers,currentLineNumber=startingLineNumber,prevIndex=0;for(newlineRegex.lastIndex=0;;){const match=newlineRegex.exec(text);if(!match){const chunks=this.processText(text.slice(prevIndex),currentModifiers);return lines.push(new AnsiLine(currentLineNumber,chunks)),lines}const line=text.slice(prevIndex,match.index);prevIndex=match.index+match[0].length;const chunks=this.processText(line,currentModifiers);var _chunks__modifiers;lines.push(new AnsiLine(currentLineNumber,chunks)),currentModifiers=null!==(_chunks__modifiers=chunks[chunks.length-1].modifiers)&&void 0!==_chunks__modifiers?_chunks__modifiers:currentModifiers,currentLineNumber+=1}},this.processText=(fullText,modifiers)=>{const chunks=[];let currentModifiers=modifiers,prevIndex=0;for(ansiRegex.lastIndex=0;;){const match=ansiRegex.exec(fullText);if(!match)return chunks.push({text:fullText.slice(prevIndex),modifiers:currentModifiers}),chunks;const text=fullText.slice(prevIndex,match.index);chunks.push({text,modifiers:currentModifiers}),prevIndex=match.index+match[0].length,currentModifiers=this.processCode(match[0],currentModifiers)}},this.processCode=(code,modifiers)=>{var _codeModifiers_code,_codeModifiers_code1;return null!==(_codeModifiers_code1=null===(_codeModifiers_code=codeModifiers[code])||void 0===_codeModifiers_code?void 0:_codeModifiers_code.call(codeModifiers,modifiers))&&void 0!==_codeModifiers_code1?_codeModifiers_code1:modifiers}}}var Typography=__webpack_require__("../node_modules/@material-ui/core/esm/Typography/Typography.js"),startCase=__webpack_require__("../node_modules/lodash/startCase.js"),startCase_default=__webpack_require__.n(startCase);function getModifierClasses(classes,modifiers){const classNames=new Array;if(modifiers.bold&&classNames.push(classes.modifierBold),modifiers.italic&&classNames.push(classes.modifierItalic),modifiers.underline&&classNames.push(classes.modifierUnderline),modifiers.foreground){const key=`modifierForeground${startCase_default()(modifiers.foreground)}`;classNames.push(classes[key])}if(modifiers.background){const key=`modifierBackground${startCase_default()(modifiers.background)}`;classNames.push(classes[key])}return classNames.length>0?classNames.join(" "):void 0}function calculateHighlightedChunks(line,searchText){const results=function findSearchResults(text,searchText){if(!searchText||!text.includes(searchText))return;const searchResults=new Array;let offset=0;for(;;){const start=text.indexOf(searchText,offset);if(-1===start)break;const end=start+searchText.length;searchResults.push({start,end}),offset=end}return searchResults}(line.text,searchText);if(!results)return line.chunks;const chunks=new Array;let lineOffset=0,resultIndex=0,result=results[resultIndex];for(const chunk of line.chunks){const{text,modifiers}=chunk;if(!result||lineOffset+text.length<result.start){chunks.push(chunk),lineOffset+=text.length;continue}let localOffset=0;for(;result;){const localStart=Math.max(result.start-lineOffset,0);if(localStart>text.length)break;const localEnd=Math.min(result.end-lineOffset,text.length);localStart>localOffset&&chunks.push({text:text.slice(localOffset,localStart),modifiers});localEnd>localStart&&chunks.push({modifiers,highlight:resultIndex,text:text.slice(localStart,localEnd)}),localOffset=localEnd;if(!(result.end-lineOffset===localEnd))break;resultIndex+=1,result=results[resultIndex]}localOffset<text.length&&chunks.push({text:text.slice(localOffset),modifiers}),lineOffset+=text.length}return chunks}function LogLine({line,classes,searchText,highlightResultIndex}){const chunks=(0,react.useMemo)((()=>calculateHighlightedChunks(line,searchText)),[line,searchText]),elements=(0,react.useMemo)((()=>chunks.map((({text,modifiers,highlight},index)=>(0,jsx_runtime.jsx)(Typography.Z,{component:"span",className:classnames_default()(getModifierClasses(classes,modifiers),void 0!==highlight&&(highlight===highlightResultIndex?classes.textSelectedHighlight:classes.textHighlight)),children:text},index)))),[chunks,highlightResultIndex,classes]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:elements})}try{LogLine.displayName="LogLine",LogLine.__docgenInfo={description:"",displayName:"LogLine",props:{line:{defaultValue:null,description:"",name:"line",required:!0,type:{name:"AnsiLine"}},classes:{defaultValue:null,description:"",name:"classes",required:!0,type:{name:'ClassNameMap<"root" | "header" | "line" | "log" | "lineSelected" | "lineCopyButton" | "lineNumber" | "textHighlight" | "textSelectedHighlight" | "modifierBold" | "modifierItalic" | "modifierUnderline" | ... 17 more ... | "modifierBackgroundGrey">'}},searchText:{defaultValue:null,description:"",name:"searchText",required:!0,type:{name:"string"}},highlightResultIndex:{defaultValue:null,description:"",name:"highlightResultIndex",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/core-components/src/components/LogViewer/LogLine.tsx#LogLine"]={docgenInfo:LogLine.__docgenInfo,name:"LogLine",path:"../packages/core-components/src/components/LogViewer/LogLine.tsx#LogLine"})}catch(__react_docgen_typescript_loader_error){}var TextField=__webpack_require__("../node_modules/@material-ui/core/esm/TextField/TextField.js"),ChevronLeft=__webpack_require__("../node_modules/@material-ui/icons/ChevronLeft.js"),ChevronRight=__webpack_require__("../node_modules/@material-ui/icons/ChevronRight.js"),FilterList=__webpack_require__("../node_modules/@material-ui/icons/FilterList.js");function LogViewerControls(props){const{resultCount,resultIndexStep,toggleShouldFilter}=props;var _props_resultIndex;const resultIndex=null!==(_props_resultIndex=props.resultIndex)&&void 0!==_props_resultIndex?_props_resultIndex:0;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[void 0!==resultCount&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.Z,{size:"small",onClick:()=>resultIndexStep(!0),children:(0,jsx_runtime.jsx)(ChevronLeft.Z,{})}),(0,jsx_runtime.jsxs)(Typography.Z,{children:[Math.min(resultIndex+1,resultCount),"/",resultCount]}),(0,jsx_runtime.jsx)(IconButton.Z,{size:"small",onClick:()=>resultIndexStep(),children:(0,jsx_runtime.jsx)(ChevronRight.Z,{})})]}),(0,jsx_runtime.jsx)(TextField.Z,{size:"small",variant:"standard",placeholder:"Search",value:props.searchInput,onKeyPress:event=>{"Enter"===event.key&&(event.metaKey||event.ctrlKey||event.altKey?toggleShouldFilter():resultIndexStep(event.shiftKey))},onChange:e=>props.setSearchInput(e.target.value)}),(0,jsx_runtime.jsx)(IconButton.Z,{size:"small",onClick:toggleShouldFilter,children:props.shouldFilter?(0,jsx_runtime.jsx)(FilterList.Z,{color:"primary"}):(0,jsx_runtime.jsx)(FilterList.Z,{color:"disabled"})})]})}try{LogViewerControls.displayName="LogViewerControls",LogViewerControls.__docgenInfo={description:"",displayName:"LogViewerControls",props:{lines:{defaultValue:null,description:"",name:"lines",required:!0,type:{name:"AnsiLine[]"}},searchText:{defaultValue:null,description:"",name:"searchText",required:!0,type:{name:"string"}},searchInput:{defaultValue:null,description:"",name:"searchInput",required:!0,type:{name:"string"}},setSearchInput:{defaultValue:null,description:"",name:"setSearchInput",required:!0,type:{name:"(searchInput: string) => void"}},shouldFilter:{defaultValue:null,description:"",name:"shouldFilter",required:!0,type:{name:"boolean"}},toggleShouldFilter:{defaultValue:null,description:"",name:"toggleShouldFilter",required:!0,type:{name:"() => void"}},resultCount:{defaultValue:null,description:"",name:"resultCount",required:!0,type:{name:"number"}},resultIndex:{defaultValue:null,description:"",name:"resultIndex",required:!0,type:{name:"number"}},resultIndexStep:{defaultValue:null,description:"",name:"resultIndexStep",required:!0,type:{name:"(decrement?: boolean) => void"}},resultLine:{defaultValue:null,description:"",name:"resultLine",required:!0,type:{name:"number"}},resultLineIndex:{defaultValue:null,description:"",name:"resultLineIndex",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/core-components/src/components/LogViewer/LogViewerControls.tsx#LogViewerControls"]={docgenInfo:LogViewerControls.__docgenInfo,name:"LogViewerControls",path:"../packages/core-components/src/components/LogViewer/LogViewerControls.tsx#LogViewerControls"})}catch(__react_docgen_typescript_loader_error){}var makeStyles=__webpack_require__("../node_modules/@material-ui/core/esm/styles/makeStyles.js"),colorManipulator=__webpack_require__("../node_modules/@material-ui/core/esm/styles/colorManipulator.js"),common=__webpack_require__("../node_modules/@material-ui/core/esm/colors/common.js"),red=__webpack_require__("../node_modules/@material-ui/core/esm/colors/red.js"),green=__webpack_require__("../node_modules/@material-ui/core/esm/colors/green.js"),yellow=__webpack_require__("../node_modules/@material-ui/core/esm/colors/yellow.js"),blue=__webpack_require__("../node_modules/@material-ui/core/esm/colors/blue.js"),purple=__webpack_require__("../node_modules/@material-ui/core/esm/colors/purple.js"),cyan=__webpack_require__("../node_modules/@material-ui/core/esm/colors/cyan.js"),grey=__webpack_require__("../node_modules/@material-ui/core/esm/colors/grey.js");const useStyles=(0,makeStyles.Z)((theme=>({root:{background:theme.palette.background.paper},header:{height:40,display:"flex",alignItems:"center",justifyContent:"flex-end"},log:{fontFamily:'"Monaco", monospace',fontSize:theme.typography.pxToRem(12)},line:{position:"relative",whiteSpace:"pre","&:hover":{background:theme.palette.action.hover}},lineSelected:{background:theme.palette.action.selected,"&:hover":{background:theme.palette.action.selected}},lineCopyButton:{position:"absolute",paddingTop:0,paddingBottom:0},lineNumber:{display:"inline-block",textAlign:"end",width:60,marginRight:theme.spacing(1),cursor:"pointer"},textHighlight:{background:(0,colorManipulator.Fq)(theme.palette.info.main,.15)},textSelectedHighlight:{background:(0,colorManipulator.Fq)(theme.palette.info.main,.4)},modifierBold:{fontWeight:theme.typography.fontWeightBold},modifierItalic:{fontStyle:"italic"},modifierUnderline:{textDecoration:"underline"},modifierForegroundBlack:{color:common.Z.black},modifierForegroundRed:{color:red.Z[500]},modifierForegroundGreen:{color:green.Z[500]},modifierForegroundYellow:{color:yellow.Z[500]},modifierForegroundBlue:{color:blue.Z[500]},modifierForegroundMagenta:{color:purple.Z[500]},modifierForegroundCyan:{color:cyan.Z[500]},modifierForegroundWhite:{color:common.Z.white},modifierForegroundGrey:{color:grey.Z[500]},modifierBackgroundBlack:{background:common.Z.black},modifierBackgroundRed:{background:red.Z[500]},modifierBackgroundGreen:{background:green.Z[500]},modifierBackgroundYellow:{background:yellow.Z[500]},modifierBackgroundBlue:{background:blue.Z[500]},modifierBackgroundMagenta:{background:purple.Z[500]},modifierBackgroundCyan:{background:cyan.Z[500]},modifierBackgroundWhite:{background:common.Z.white},modifierBackgroundGrey:{background:grey.Z[500]}})),{name:"BackstageLogViewer"});var useToggle=__webpack_require__("../node_modules/@react-hookz/web/esm/useToggle/useToggle.js");function useLogViewerSearch(lines){var _filter_results;const[searchInput,setSearchInput]=(0,react.useState)(""),searchText=searchInput.toLocaleLowerCase("en-US"),[resultIndex,setResultIndex]=(0,react.useState)(0),[shouldFilter,toggleShouldFilter]=(0,useToggle.O)(!1),filter=(0,react.useMemo)((()=>function applySearchFilter(lines,searchText){if(!searchText)return{lines};const matchingLines=[],searchResults=[];for(const line of lines)if(line.text.includes(searchText)){matchingLines.push(line);let offset=0,lineResultIndex=0;for(;;){const start=line.text.indexOf(searchText,offset);if(-1===start)break;searchResults.push({lineNumber:line.lineNumber,lineIndex:lineResultIndex++}),offset=start+searchText.length}}return{lines:matchingLines,results:searchResults}}(lines,searchText)),[lines,searchText]),searchResult=filter.results?filter.results[Math.min(resultIndex,filter.results.length-1)]:void 0,resultCount=null===(_filter_results=filter.results)||void 0===_filter_results?void 0:_filter_results.length;return{lines:shouldFilter?filter.lines:lines,searchText,searchInput,setSearchInput,shouldFilter,toggleShouldFilter,resultCount,resultIndex,resultIndexStep:decrement=>{if(decrement){if(void 0!==resultCount){const next=Math.min(resultIndex-1,resultCount-2);setResultIndex(next<0?resultCount-1:next)}}else if(void 0!==resultCount){const next=resultIndex+1;setResultIndex(next>=resultCount?0:next)}},resultLine:null==searchResult?void 0:searchResult.lineNumber,resultLineIndex:null==searchResult?void 0:searchResult.lineIndex}}try{useLogViewerSearch.displayName="useLogViewerSearch",useLogViewerSearch.__docgenInfo={description:"",displayName:"useLogViewerSearch",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/core-components/src/components/LogViewer/useLogViewerSearch.tsx#useLogViewerSearch"]={docgenInfo:useLogViewerSearch.__docgenInfo,name:"useLogViewerSearch",path:"../packages/core-components/src/components/LogViewer/useLogViewerSearch.tsx#useLogViewerSearch"})}catch(__react_docgen_typescript_loader_error){}var src=__webpack_require__("../packages/core-plugin-api/src/index.ts"),useCopyToClipboard=__webpack_require__("../node_modules/react-use/lib/useCopyToClipboard.js");function useLogViewerSelection(lines){const errorApi=(0,src.h_)(src.VE),[sel,setSelection]=(0,react.useState)(),start=sel?Math.min(sel.start,sel.end):void 0,end=sel?Math.max(sel.start,sel.end):void 0,[{error},copyToClipboard]=(0,useCopyToClipboard.Z)();return(0,react.useEffect)((()=>{error&&errorApi.post(error)}),[error,errorApi]),{shouldShowButton:line=>start===line||end===line,isSelected:line=>!!sel&&(start<=line&&line<=end),setSelection(line,add){setSelection(add?s=>s?{start:s.start,end:line}:{start:line,end:line}:s=>(null==s?void 0:s.start)===line&&(null==s?void 0:s.end)===line?void 0:{start:line,end:line})},copySelection(){if(sel){const copyText=lines.slice(Math.min(sel.start,sel.end)-1,Math.max(sel.start,sel.end)).map((l=>l.chunks.map((c=>c.text)).join(""))).join("\n");copyToClipboard(copyText),setSelection(void 0)}}}}try{useLogViewerSelection.displayName="useLogViewerSelection",useLogViewerSelection.__docgenInfo={description:"",displayName:"useLogViewerSelection",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/core-components/src/components/LogViewer/useLogViewerSelection.tsx#useLogViewerSelection"]={docgenInfo:useLogViewerSelection.__docgenInfo,name:"useLogViewerSelection",path:"../packages/core-components/src/components/LogViewer/useLogViewerSelection.tsx#useLogViewerSelection"})}catch(__react_docgen_typescript_loader_error){}function RealLogViewer(props){const classes=useStyles({classes:props.classes}),listRef=(0,react.useRef)(null),lines=(0,react.useMemo)((()=>new AnsiProcessor),[]).process(props.text),search=useLogViewerSearch(lines),selection=useLogViewerSelection(lines),location=(0,dist.TH)();(0,react.useEffect)((()=>{void 0!==search.resultLine&&listRef.current&&listRef.current.scrollToItem(search.resultLine-1,"center")}),[search.resultLine]),(0,react.useEffect)((()=>{if(location.hash){const line=parseInt(location.hash.replace(/\D/g,""),10);selection.setSelection(line,!1)}}),[]);const handleSelectLine=(line,event)=>{selection.setSelection(line,event.shiftKey)};return(0,jsx_runtime.jsx)(index_esm.Z,{children:({height,width})=>(0,jsx_runtime.jsxs)(Box.Z,{style:{width,height},className:classes.root,children:[(0,jsx_runtime.jsx)(Box.Z,{className:classes.header,children:(0,jsx_runtime.jsx)(LogViewerControls,{...search})}),(0,jsx_runtime.jsx)(dist_index_esm.t7,{ref:listRef,className:classes.log,height:height-40,width,itemData:search.lines,itemSize:20,itemCount:search.lines.length,children:({index,style,data})=>{const line=data[index],{lineNumber}=line;return(0,jsx_runtime.jsxs)(Box.Z,{style:{...style},className:classnames_default()(classes.line,{[classes.lineSelected]:selection.isSelected(lineNumber)}),children:[selection.shouldShowButton(lineNumber)&&(0,jsx_runtime.jsx)(IconButton.Z,{"data-testid":"copy-button",size:"small",className:classes.lineCopyButton,onClick:()=>selection.copySelection(),children:(0,jsx_runtime.jsx)(FileCopy.Z,{fontSize:"inherit"})}),(0,jsx_runtime.jsx)("a",{role:"row",target:"_self",href:`#line-${lineNumber}`,className:classes.lineNumber,onClick:event=>handleSelectLine(lineNumber,event),onKeyPress:event=>handleSelectLine(lineNumber,event),children:lineNumber}),(0,jsx_runtime.jsx)(LogLine,{line,classes,searchText:search.searchText,highlightResultIndex:search.resultLine===lineNumber?search.resultLineIndex:void 0})]})}})]})})}try{RealLogViewer.displayName="RealLogViewer",RealLogViewer.__docgenInfo={description:"",displayName:"RealLogViewer",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"{ root?: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../packages/core-components/src/components/LogViewer/RealLogViewer.tsx#RealLogViewer"]={docgenInfo:RealLogViewer.__docgenInfo,name:"RealLogViewer",path:"../packages/core-components/src/components/LogViewer/RealLogViewer.tsx#RealLogViewer"})}catch(__react_docgen_typescript_loader_error){}}}]);