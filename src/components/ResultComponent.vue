<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <h3>{{ picked }}</h3>
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