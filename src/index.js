import QuickpagesField     from './components/field/Quickpages.vue'
import QuickpagesDialog    from './components/dialogs/QuickpagesDialog.vue'

panel.plugin('sylvainjule/quickpages', {
    fields: {
        quickpages: QuickpagesField,
    },
    components: {
    	'k-quickpages-dialog': QuickpagesDialog,
    }
});