<template>
    <v-container>
        <v-row>
            <v-col>
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