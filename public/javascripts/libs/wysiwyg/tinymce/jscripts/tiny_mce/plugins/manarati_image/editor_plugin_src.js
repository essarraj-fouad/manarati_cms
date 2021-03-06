///**
// * editor_plugin_src.js
// *
// * Copyright 2010, fMath.info
// *
// * License: http://www.fmath.info/LICENCE.jsp
// */
//
//
//
//(function() {
//	// Load plugin specific language pack
//	tinymce.PluginManager.requireLangPack('manarati_image');
//
//	var urlViewer = "";
//
//
//
//
//	tinymce.create('manarati.plugins.ImagePlugin', {
//		/**
//		 * Initializes the plugin, this will be executed after the plugin has been created.
//		 * This call is done before the editor instance has finished it's initialization so use the onInit event
//		 * of the editor instance to intercept that event.
//		 *
//		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
//		 * @param {string} url Absolute URL to where the plugin is located.
//		 */
//		init : function(ed, url) {
//			urlViewer = url;
//
//			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('fMathAddFormula');
//			ed.addCommand('ManaratiImageAddImage', function() {
//
//				ed.windowManager.open({
//					file : url + '/dialog.htm',
//					width : 900,
//					height : 550
//				}, {
//					plugin_url : url // Plugin absolute URL
//					//some_custom_arg : 'custom arg' // Custom argument
//				});
//			});
//
//			// Register fmath_formula button
//			ed.addButton('manarati_image', {
//				title : 'manarati_image.desc',
//				cmd : 'ManaratiImageAddImage',
//				image : url + '/img/manarati_image.png'
//			});
//
//
//		},
//
//		/**
//		 * Creates control instances based in the incomming name. This method is normally not
//		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
//		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
//		 * method can be used to create those.
//		 *
//		 * @param {String} n Name of the control to create.
//		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
//		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
//		 */
//		createControl : function(n, cm) {
//			return null;
//		},
//
//		/**
//		 * Returns information about the plugin as a name/value array.
//		 * The current keys are longname, author, authorurl, infourl and version.
//		 *
//		 * @return {Object} Name/value array containing information about the plugin.
//		 */
//		getInfo : function() {
//			return {
//				longname : 'Manarati Image Plugin',
//				author : 'Essarraj Fouad',
//				authorurl : 'http://www.manarati.net',
//				infourl : 'http://www.manarati.net',
//				version : "0.1"
//			};
//		},
//
//		addMathML : function(m){
//			fmath_nbFlash =fmath_nbFlash + 1;
//			var newName = "MathMLEq" + fmath_nbFlash;
//			fmath_flashMathML[newName] = m;
//			return newName;
//		},
//
//		updateMathML : function(id, m){
//			fmath_flashMathML[id] = m;
//		},
//
//		getSelected : function(){
//			return fmath_currentElement;
//		},
//
//		getCurrentMathML : function(){
//			return fmath_flashMathML[fmath_currentElement];
//		},
//
//		getMathML : function(name){
//			return fmath_flashMathML[name];
//		},
//
//		getUrlViewer : function(){
//			return urlViewer;
//		}
//
//
//	});
//
//
//	// Register plugin
//	tinymce.PluginManager.add('manarati_image', manarati.plugins.ImagePlugin);
//})();
//
//
//
//
//
//
