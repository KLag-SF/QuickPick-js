<template>
    <v-container>
        <v-row>
            <v-col v-if="picked.length != 0">
                {{picked}}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "ResultComponent",

    data:() => ({

    }),

    props:[
        'picked'
    ],

    methods:{

    }
}
</script>