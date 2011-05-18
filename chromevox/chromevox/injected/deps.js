// This file was autogenerated by /home/build/nonconf/google3/javascript/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../android/injected/android_dev_tts_engine.js', ['cvox.AndroidDevTtsEngine'], ['cvox.AbstractTts', 'cvox.BuildConfig']);
goog.addDependency('../android/injected/android_earcons.js', ['cvox.AndroidEarcons'], ['cvox.AbstractEarcons', 'cvox.BuildConfig']);
goog.addDependency('../android/injected/android_rel_tts_engine.js', ['cvox.AndroidRelTtsEngine'], ['cvox.AbstractTts', 'cvox.BuildConfig']);
goog.addDependency('../audio/common/abstract_earcons.js', ['cvox.AbstractEarcons'], ['cvox.AbstractLogger']);
goog.addDependency('../audio/common/abstract_earcons_manager.js', ['cvox.AbstractEarconsManager'], ['cvox.AbstractEarcons']);
goog.addDependency('../audio/common/abstract_tts.js', ['cvox.AbstractTts'], ['cvox.AbstractLogger']);
goog.addDependency('../audio/common/abstract_tts_manager.js', ['cvox.AbstractTtsManager'], ['cvox.AbstractTts']);
goog.addDependency('../audio/common/local_earcons_manager.js', ['cvox.LocalEarconsManager'], ['cvox.AbstractEarconsManager']);
goog.addDependency('../audio/common/local_tts_manager.js', ['cvox.LocalTtsManager'], ['cvox.AbstractTts', 'cvox.AbstractTtsManager']);
goog.addDependency('../audio/common/remote_earcons_manager.js', ['cvox.RemoteEarconsManager'], ['cvox.AbstractEarconsManager', 'cvox.ExtensionBridge']);
goog.addDependency('../audio/common/remote_tts_manager.js', ['cvox.RemoteTtsManager'], ['cvox.AbstractTtsManager']);
goog.addDependency('../build/build_config_chrome.js', ['cvox.BuildConfig'], ['cvox.BuildDefs']);
goog.addDependency('../build/build_defs.js', ['cvox.BuildDefs'], []);
goog.addDependency('../chromevis/injected/lens.js', ['chromevis.ChromeVisLens'], ['cvox.BuildConfig', 'cvox.ExtensionBridge', 'cvox.SelectionUtil']);
goog.addDependency('../chromevox/injected/api.js', ['cvox.Api'], ['cvox.ChromeVox']);
goog.addDependency('../chromevox/injected/event_watcher.js', ['cvox.ChromeVoxEventWatcher'], ['cvox.ChromeVox', 'cvox.ChromeVoxEditableTextBase', 'cvox.ChromeVoxKbHandler', 'cvox.ChromeVoxUserCommands', 'cvox.DomUtil', 'cvox.LiveRegions']);
goog.addDependency('../chromevox/injected/init.js', ['cvox.ChromeVoxInit'], ['chromevis.ChromeVisLens', 'cvox.AndroidDevTtsEngine', 'cvox.AndroidEarcons', 'cvox.AndroidRelTtsEngine', 'cvox.BuildConfig', 'cvox.ChromeVox', 'cvox.ChromeVoxEventWatcher', 'cvox.ChromeVoxKbHandler', 'cvox.ChromeVoxNavigationManager', 'cvox.ChromeVoxSearch', 'cvox.ExtensionBridge', 'cvox.LiveRegions', 'cvox.LocalEarconsManager', 'cvox.LocalTtsManager', 'cvox.RemoteEarconsManager', 'cvox.RemoteTtsManager', 'cvox.TraverseContent']);
goog.addDependency('../chromevox/injected/keyboard_handler.js', ['cvox.ChromeVoxKbHandler'], ['cvox.ChromeVox', 'cvox.ChromeVoxJSON', 'cvox.ChromeVoxSearch', 'cvox.ChromeVoxUserCommands', 'cvox.KeyUtil']);
goog.addDependency('../chromevox/injected/live_regions.js', ['cvox.LiveRegions'], ['cvox.AriaUtil', 'cvox.ChromeVox', 'cvox.DomUtil']);
goog.addDependency('../chromevox/injected/navigation_manager.js', ['cvox.ChromeVoxNavigationManager'], ['cvox.ChromeVoxChoiceWidget', 'cvox.DomUtil', 'cvox.Interframe', 'cvox.LinearDomWalker', 'cvox.SelectionUtil', 'cvox.SelectionWalker', 'cvox.SmartDomWalker']);
goog.addDependency('../chromevox/injected/tools/choice_widget.js', ['cvox.ChromeVoxChoiceWidget'], ['cvox.AbstractEarcons', 'cvox.AbstractTts', 'cvox.ChromeVox']);
goog.addDependency('../chromevox/injected/tools/search.js', ['cvox.ChromeVoxSearch'], ['cvox.AbstractEarcons', 'cvox.ChromeVox', 'cvox.SelectionUtil', 'cvox.XpathUtil']);
goog.addDependency('../chromevox/injected/user_commands.js', ['cvox.ChromeVoxUserCommands'], ['cvox.AbstractEarcons', 'cvox.ChromeVox', 'cvox.ChromeVoxNavigationManager', 'cvox.ChromeVoxSearch', 'cvox.DomUtil', 'cvox.ExtensionBridge', 'cvox.SelectionUtil']);
goog.addDependency('../common/abstract_logger.js', ['cvox.AbstractLogger'], []);
goog.addDependency('../common/aria_util.js', ['cvox.AriaUtil'], []);
goog.addDependency('../common/chromevox.js', ['cvox.ChromeVox'], []);
goog.addDependency('../common/chromevox_json.js', ['cvox.ChromeVoxJSON'], []);
goog.addDependency('../common/custom_walker.js', ['cvox.CustomWalker'], []);
goog.addDependency('../common/dom_util.js', ['cvox.DomUtil'], ['cvox.AriaUtil', 'cvox.XpathUtil']);
goog.addDependency('../common/editable_text.js', ['cvox.ChromeVoxEditableContentEditable', 'cvox.ChromeVoxEditableHTMLInput', 'cvox.ChromeVoxEditableTextArea', 'cvox.ChromeVoxEditableTextBase'], ['cvox.DomUtil']);
goog.addDependency('../common/extension_bridge.js', ['cvox.ExtensionBridge'], ['cvox.BuildConfig', 'cvox.ChromeVoxJSON']);
goog.addDependency('../common/focus_util.js', ['cvox.FocusUtil'], []);
goog.addDependency('../common/interframe.js', ['cvox.Interframe'], ['cvox.ChromeVoxJSON']);
goog.addDependency('../common/key_util.js', ['cvox.KeyUtil'], ['cvox.ChromeVox']);
goog.addDependency('../common/linear_dom_walker.js', ['cvox.LinearDomWalker'], ['cvox.DomUtil', 'cvox.XpathUtil']);
goog.addDependency('../common/selection_util.js', ['cvox.SelectionUtil'], ['cvox.DomUtil', 'cvox.XpathUtil']);
goog.addDependency('../common/selection_walker.js', ['cvox.SelectionWalker'], ['cvox.SelectionUtil', 'cvox.TraverseContent']);
goog.addDependency('../common/smart_dom_walker.js', ['cvox.SmartDomWalker'], ['cvox.DomUtil', 'cvox.LinearDomWalker', 'cvox.TraverseTable', 'cvox.XpathUtil']);
goog.addDependency('../common/table_util.js', ['cvox.TableUtil'], ['cvox.XpathUtil']);
goog.addDependency('../common/traverse_content.js', ['cvox.TraverseContent'], ['cvox.DomUtil', 'cvox.SelectionUtil', 'cvox.TraverseUtil']);
goog.addDependency('../common/traverse_table.js', ['cvox.TraverseTable'], ['cvox.SelectionUtil', 'cvox.TableUtil', 'cvox.TraverseUtil']);
goog.addDependency('../common/traverse_util.js', ['cvox.TraverseUtil'], []);
goog.addDependency('../common/xpath_util.js', ['cvox.XpathUtil'], []);
goog.addDependency('../scripts/axsjax/axsjax.js', ['cvox.AxsJAX'], ['cvox.ChromeVox', 'cvox.DomUtil', 'cvox.XpathUtil']);
goog.addDependency('../scripts/axsjax/axsnav.js', ['cvox.AxsNav'], ['cvox.CustomWalker']);
